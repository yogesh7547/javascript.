if(true){
    let a=23
const b=543
var c=98 // can be accessed outside the if statement 
d=22   // can be accessed outside the if statement 
}

// console.log(a)  

//console.log(b)  

//console.log(c)  


//console.log(d) 


let value=100 //globally scoped

if(true){
    let value=45 //locally scoped
    console.log("inner value:", value)
}

console.log("outer value: " ,value)