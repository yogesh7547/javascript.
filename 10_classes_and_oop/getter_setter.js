 class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
       this._email=value
    }

    get password(){
        return `${this._password}hitehs`
    }

    set password(value){
        this._password=value
    }
 }
 
 const hitesh= new user('chai.com', '1234');
 console.log(hitesh.email)