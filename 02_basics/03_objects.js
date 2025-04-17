//singleton
// Object.create


const mySym=Symbol("key1");

//object literals
const jsUser={
    name:"hitesh",
    "full name":"hitesh choudhary",
    
     [mySym]:"myKey1",
     age :18,
     location:"jaipur",
     email:"hitesh@gmail.comm",
     isLoggedIn:false,
     lastLoginDays:["monday", "tuesday"]
      
}

// console.log(jsUser.name);//one way to access  value 
// console.log(jsUser["name"])// another way to access  value .( preferred way )
// console.log(jsUser["full name"])// full name can be accessed only in this way since the key is written inside double quotes
// console.log(jsUser[mySym]);
// console.log(typeof(jsUser[mySym]));


jsUser.email="hiteshchat@gmail.com";

// Object.freeze(jsUser); // stops any further changes in the object

jsUser.email= "chatbot.gmail.com";

// console.log(jsUser)

jsUser.greetings=function(){
    console.log("hello js user") ;

}

 jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`); //this keyword refers to the context in which a function is called — essentially, it refers to the object that is executing the current function.
 }

 //console.log(jsUser.greetings);
 console.log(jsUser.greetings());

 console.log(jsUser.greetingTwo());

 /* terminal */ 
//  hello js user
// undefined
// hello js user,hitesh
// undefined


//  jsUser.greetings() runs → it logs "hello js user" to the console.
// But it doesn't return anything (so by default, it returns undefined).
// Then console.log(...) logs the returned value — which is undefined.