// const user ={
//     // username:"hitesh",
//     // price:900,

//     WelcomeMessage:function(){
//         //console.log(`${this.username}, welcome to website`)//this refers to the current context
//         //  console.log(this);
//     }

//}

// user.WelcomeMessage()
// user.username="sam"//changed the current context
// user.WelcomeMessage()

// console.log(this) // gives empty object bcoz its the current context in the global scope
//if you run this log in console , it gives  window object becoz it is the global object in the browser


// function chai(){

//      let username="altman"
//     
//     console.log(this.username) //doesnt work like it did in a object
// }

// chai()


// const chai= function(){
    
//      let username="altman"
//     
//     console.log(this.username)//doesnt work like it did in a object
// }

// chai()




//arrow function
// const chai=()=>{
//     let username="altman"
//     console.log(this.username) //doesnt work like it did in a object
// }

// chai()


// const addTwo=(num1,num2)=> {
//     return num1+num2
// }


  //implicit return- when you dont need to use return keyword
// const addTwo=(num1,num2)=>(num1+num2)// paranthesis m return keyword use krnme ki jarurat nahi h 

const addTwo=(num1,num2)=>({username:"nitin"})
console.log(addTwo(3,4)) 


