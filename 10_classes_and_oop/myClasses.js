
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}acb`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai= new user('chai','chai.com','123')

console.log(chai.encryptPassword())
console.log(chai.changeUsername())



//behind the scenes

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());