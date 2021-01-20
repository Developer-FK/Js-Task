
// let object = Foo("satyam", 22);

// console.log(object.bar());


// //console.log(global.new);

// // var ob =  Foo();

// // ob.bar()

// let arr = [6,7,10];
// console.log(arr.length) //3

// arr[3] = 56;
// console.log(arr.length)//4

// arr[102] = 109; 
// arr[500] = 500;
// console.log(arr.length) //Error

// let arr = [6,7,8,9];

// let oddArr = arr.reduce((res, ele) => res + ele);

// // let str2 = [] ;

// // str2.fill(arr);

// // str2[0] =100;
// console.log(oddArr);


// let river = {
//     "type": "river",
//     "length": 200
// }

// let newRiver = river

// console.log(river===newRiver)

// let nestedArr = Object.entries(river);

// let manipulatedObj = nestedArr.map((ele, index) => {
//     if(index == 1){

//         ele[1] += 200;
//     }

//     return ele;
  
    
// });

// function myfunc(){

//     console.log("Caled");

// }
// setInterval(myfunc, 500);





// // see = river
// river = Object.from(manipulatedObj)
//  console.log(river);





// function outer(){

//     let temp = 10+20;

//     return function inner(){

     
//         return temp;
//     }
    
// }

// console.log(outer()())

// function curry(f) { // curry(f) does the currying transform 1. f = sum; 2. a =4
//     return function(a) {
//       return function(b) {
//         return f(a, b);
//       };
//     };
//   }
  // usage
//   function sum(a, b) {
    
//     return a + b;
//   }
  
// let curriedSum = curry(sum);
// let funcB = curriedSum(4);
// console.log(funcB(8));





// class Rectangle{

//   constructor(width, height){

//     this.w = width;
//     this.h = height;
//   }


// }

// function Foo(){

// console.log("foo");
// }


// let obj = new Rectangle(8,9);

// console.log(typeof Rectangle);
// console.log(typeof Foo);


let arr = ["3 - one > hiii", "789 - Two > heloo > hi"];


let newA  = arr.map(ele => {

  let i = ele.indexOf('-');
  //console.log(i)
  return (ele.substr(i + 2));
  
})

//console.log(newA)
let newArr = newA.map(ele => {
  //console.log(ele)
  return (ele.split('>'));
})

console.log(newArr);