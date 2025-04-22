const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, logincount, isLoggedIn){
    this.username=username
    this.loginCount=logincount
    this.isLoggedIn=isLoggedIn

    this.greetings=function(){
        console.log(this.username);
    }

    return this
}

// const userOne= User("hitesh", 12, true);
// const userTwo= User("chai and code ", 10, false);// overrides the values of userOne

const userOne= new User("hitesh", 12, true);
const userTwo=  new  User("chai and code ", 10, false);
// console.log(userOne.constructor);
console.log(userOne);
console.log(userTwo);

//new keyword creates a new empty object called  instance to this so that the values of functions dont override each other
//constructor function is called and packs up all the arguements in it and gives it to us 
//all the arguements are injected in this keyword
//we get it inside the function

/*
When you use the new keyword with a constructor function, four key things happen:

✅ Step-by-step breakdown:

Creates a new empty object
new creates a fresh, empty object:
→ {}

Sets the this keyword to point to that new object
Inside the Person function, this refers to the new object.

Injects all arguments into this
So when you do this.name = name, you're assigning name to that empty object.

Resulting in:
→ { name: "Tarang", age: 20 }

Returns the object automatically
If the constructor doesn’t return anything manually, JS returns the object stored in this by default.

 */