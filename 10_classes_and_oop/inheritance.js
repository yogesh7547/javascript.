class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user{
    constructor(username,email,password){

        super(username)
        this.email=email
        this.password=password
    }

    addCourses(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai= new teacher('chai','chai.com','12434')
chai.addCourses();

const masalaChai= new user("masala")
masalaChai.logMe()

console.log(chai instanceof user)
