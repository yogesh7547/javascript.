const promiseOne = new Promise(function(resolve, reject){

    //do an async taks
    //DB calls , cryptography, network

    setTimeout(function(){
        console.log('async taks is complete');
        resolve()
    },1000)
})


promiseOne.then(function(){
    console.log('promise consumed');
})



new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('async task 2 ');
        resolve();
    },1000)
   

}).then(function(){
    console.log('async task 2 resolved')
})


const promiseThree= new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour= new Promise(function(resolve , reject ){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"hitesh", password:"1234"})
        }
        else{
            reject('ERROR something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((myUsername)=>{
    console.log(myUsername)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("the promise is either resolved or rejected")
})



const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"javascript", password:"1234"})
        }
        else{
            reject('ERROR JS went wrong')
        }
    },1000)
})


async function consumePromiseFive (){
   try {
    const response= await promiseFive;
    console.log(response)
   } catch (error) {
     console.log(error)
   }

}

consumePromiseFive()




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
