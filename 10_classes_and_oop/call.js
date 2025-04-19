function SetUsername(username) {
    this.username = username
    console.log("called")
}

function createUser(username, email, password) {
    //    SetUsername(username)
    SetUsername.call(this,username)// you have to explicitly call  by using call keyword

    this.emai = email
    this.password = password
}

const chai = new createUser("chai", "chai@.com", "1234")
console.log(chai)


/* SetUsername.call(this, username):
Here, you're calling the function SetUsername, but explicitly setting the this context to be the one from createUser.

So now, inside SetUsername, this refers to the same object being created in createUser.

It’s like saying:

“Hey SetUsername, don’t create your own this. Use mine — the one I'm currently using in createUser.” */