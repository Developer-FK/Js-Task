let selectFirst = document.querySelector('#first');

const divEle = document.querySelector('div');

const secDiv = document.querySelector('#secDiv');

const thirdDiv = document.querySelector('#thirdDiv');


const forthDiv = document.querySelector('#forthDiv');





fetch("googleProducts.txt")
.then(res => {
    return res.text();
    
}).then((data) => {
    // preparing array where each element is one line text
    let s = data.split('\n');
//    console.log(s)
    // console.log(s.length)


    // split on - and remove integers from begining of each line.
    let arrWithoutInt = s.map(element => {
        let i = element.indexOf('-');
        return element.substr( i+ 2);
        
    });

  //console.log(arrWithoutInt);

  // 2-D array of elements on split of '>'
    let TwoD = arrWithoutInt.map(ele => ele.split('>'));
    //console.log(TwoD);

    
    let differentElements = [];
    TwoD = TwoD.splice(1)
    let optionInFirst ;
    TwoD.forEach(element => {

        //console.log(element[0].trim())
        let trimmedEle = element[0].trim();
        if(differentElements.indexOf(trimmedEle ) == -1){

            differentElements.push(trimmedEle);
            //create option tag;

            optionInFirst =  document.createElement('option');
            optionInFirst.textContent = trimmedEle;

            selectFirst.append(optionInFirst)
        }
        
    });


    selectFirst.addEventListener('change', () =>{

    
       // console.log("seleted", selectFirst.value);

        generateSecondSelect(selectFirst.value, 0);

    });


    // Function to generate 2nd select tag
    //let flag = false;
    function generateSecondSelect(optionSelected, index){

        // onchane display none

        thirdDiv.style.display = "none";
        forthDiv.style.display = "none";


        let secSelDuplication = document.getElementById("second")
        if(secSelDuplication != null){

            secSelDuplication.remove()
        }
        
        let secondSelectTag = document.createElement('select');
        secondSelectTag.setAttribute('id', "second");


        // creting first disabled option  item
        let firstOptionInsec = document.createElement('option');
        firstOptionInsec.textContent = "Select Product";
        firstOptionInsec.setAttribute('selected', true);
        firstOptionInsec.setAttribute('disabled', true);
        // appending to select

        secondSelectTag.append(firstOptionInsec)

        //console.log("\ntriggered", optionSelected)

        let secondDifferentElements = []
        let trimSecEle;
        let optionInSec;
        TwoD.forEach(ele => {
            if(ele.length > index + 1 && ele[0].trim() == optionSelected){

                trimSecEle = ele[index+1].trim()
                if(secondDifferentElements.indexOf(trimSecEle) == -1){

                    secondDifferentElements.push(trimSecEle);
                    optionInSec =  document.createElement('option');
                    optionInSec.textContent = optionSelected + "/" + trimSecEle;
                    secondSelectTag.append(optionInSec);

                }

            }

            
            
        });

        secDiv.append(secondSelectTag);
        // Event handler on change on 2nd selected tag
        secondSelectTag.addEventListener('change', () => {
           // console.log("@nd selected", secondSelectTag.value);

           generateThirdSelect(secondSelectTag.value, 1);
        })




        function generateThirdSelect(optionSelectedIn2ndSel, index){

            let thirdSelDuplication = document.getElementById("third");

            if(thirdSelDuplication != null){

                thirdSelDuplication.remove()
            }

            thirdDiv.style.display = "initial";
            forthDiv.style.display = "none";
            
            let thirdSelectTag = document.createElement('select');
            thirdSelectTag.setAttribute('id', "third");


            // creting first disabled option  item
            let firstOptionInsec = document.createElement('option');
            firstOptionInsec.textContent = "Select Product";
            firstOptionInsec.setAttribute('selected', true);
            firstOptionInsec.setAttribute('disabled', true);
            // appending to select

            thirdSelectTag.append(firstOptionInsec)

            let [firstSelected , seconSeleted] = optionSelectedIn2ndSel.split('/');
            let count = 0;
            let thirdDifferArray = []

           // console.log(firstSelected); console.log(seconSeleted);

            TwoD.forEach(ele => {

                if(ele.length > index + 1){

                    if(ele[0].trim() == firstSelected && ele[1].trim() == seconSeleted && thirdDifferArray.indexOf(ele[2].trim()) == -1){
                        thirdDifferArray.push(ele[2].trim())
                        let optionIn3rdSel = document.createElement('option');

                        optionIn3rdSel.textContent = optionSelectedIn2ndSel + "/" + ele[2].trim();
                         
                        thirdSelectTag.append(optionIn3rdSel)
                        count++;

                    }

                }
            });


            if(count != 0){
                thirdDiv.append(thirdSelectTag);

                thirdSelectTag.addEventListener('change', () => {


                    generateforSelect(thirdSelectTag.value, 2);

                })
                
            } 


            function generateforSelect(thirdSelectedValue, index){

                let forSelDuplication = document.getElementById("forth");

                if(forSelDuplication != null){

                    forSelDuplication.remove()
                }

                thirdDiv.style.display = "initial";
                forthDiv.style.display = "initial";
                
                let fordSelectTag = document.createElement('select');
                fordSelectTag.setAttribute('id', "forth");


                // creting first disabled option  item
                let firstOptionInsec = document.createElement('option');
                firstOptionInsec.textContent = "Select Product";
                firstOptionInsec.setAttribute('selected', true);
                firstOptionInsec.setAttribute('disabled', true);
                // appending to select

                fordSelectTag.append(firstOptionInsec)
                
                let count  = 0;

                console.log("Helloo");
                let [first, second, third] = thirdSelectedValue.split('/');
                console.log(thirdSelectedValue, second ,third);
                let forDifferArray = []
                TwoD.forEach(ele => {

                    if(ele.length > index + 1){
    
                        if(ele[0].trim() == first && ele[1].trim() == second && ele[2].trim() == third && forDifferArray.indexOf(ele[3].trim()) == -1){
                            forDifferArray.push(ele[3].trim())
                            let optionIn4rdSel = document.createElement('option');
    
                            optionIn4rdSel.textContent = thirdSelectedValue + "/" + ele[3].trim();
                             
                            fordSelectTag.append(optionIn4rdSel)
                            count++;
    
                        }
    
                    }
                });


                if(count != 0){
                    forthDiv.append(fordSelectTag);
    
                    
                }








            };



            


        }



    }
    //End of second select tag




       
}).catch(err => {

    console.log(err)
});

