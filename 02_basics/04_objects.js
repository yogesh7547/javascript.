//const tinderUser= new Object()
//or
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    age: 1,
    id: 345,
    fullname: {
        username: {
            userfullname: {
                firstname: "yogesh",
                lastname: "kurmalker"
            }

        }
    }
}

// console.log(regularUser.fullname.username.userfullname.firstname)


const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c"
    ,4:"d"
}

// const obj3={obj1, obj2}//return obj3 with obj1 and obj2 stored as objects inside obj3
// const obj3=Object.assign({},obj1,obj2)// empty paranthesis is added to specify it as a target and the rest other are source 
// syntax: Object.assign(target, source);

const obj3={...obj1,...obj2}//using spread operator
//console.log(obj3)

const users=[
    {
        id:1,
        email:"g@gmail.com"
    },
    {
        id:2,
        email:"g@gmail.com"
    },
    {
        id:3,
        email:"g@gmail.com"
    },
    {
        id:4,
        email:"g@gmail.com"
    }
    
]

console.log(users[0].id)




console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
// returns the keys and values in the form of an array

console.log(tinderUser.hasOwnProperty('isLoggedIn'))