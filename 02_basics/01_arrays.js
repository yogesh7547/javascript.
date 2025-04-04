 
 const myArr=[1,2,4,4,"sdfs","df"];

 const arr= new Array(1,4,3,4);


 //methods

//  myArr.push(90);
//  console.log(myArr);
//  myArr.pop();
//  console.log(myArr);

// myArr.unshift(89);
// console.log(myArr);
// myArr.shift();
 // console.log(myArr);

// const newArr= myArr.join()

// console.log(myArr)
// console.log(newArr)

// console.log(typeof newArr)

const myn1= myArr.slice(1,3);// doesnt manipulates the original array 
console.log("B",myn1);
console.log(myArr)//output[ 1, 2, 4, 4, 'sdfs', 'df' ]

const myn2= myArr.splice(1,3);//manipulates the original array 
console.log("A",myn2);
console.log(myArr) //output [ 1, 'sdfs', 'df' ]