// datatypes
//primitive(call by value)- String, Number, Boolean, undefined, null, symbol,BigInt

const id=Symbol('123');
const anotherId= Symbol('123');

console.log(id===anotherId);

//reference(or non primtive)(call by reference)- Arrays, Objects, Functions

const heroes=["thor","ironman","hulk"];

let myObj={
    name:yogesh,
    age:19,
}

const myFunction=function (){
    console.log("helloworld");

}