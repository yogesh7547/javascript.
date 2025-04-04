// datatypes
//primitive(call by value)- String, Number, Boolean, undefined, null, symbol,BigInt

// const id=Symbol('123');
// const anotherId= Symbol('123');

// console.log(id===anotherId);

//reference(or non primtive)(call by reference)- Arrays, Objects, Functions

// const heroes=["thor","ironman","hulk"];

// let myObj={
//     name:yogesh,
//     age:19,
// }

// const myFunction=function (){
//     // console.log("helloworld");

// }



/****************************************************************************/

// stack(primitive), heap(non primitive)


// stack(primitive)
let myname="yogesh";

let anothername=myname; //here copy of myname is passed ,not the actual value
anothername="yogii";/// thats why on changing ,it does not alter with the actual value

console.log(myname);
console.log(anothername);

// non-primitive(heap)
let userOne ={
    id:"yogi@gmial.com",
    password:"1234"
}
//this information is stored in heap 

let userTwo= userOne; // userTwo now gets the reference of userOne info stored in heap 

userTwo.id="coding@gmail.com";// thats why changing it from userTwo will also change it in UserOne

console.log(userOne.id);
console.log(userTwo.id);