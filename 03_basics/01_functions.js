//  function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
//  }

 addTwoNumbers(2,5)
 addTwoNumbers(2+"3")

 function addTwoNumbers(number1, number2){

    // let result=number1+number2;
    // return result

    return number1+number2;

 }
 const result=addTwoNumbers(9,6);
//  console.log("result is :", result)





//  function loginUsername(userName){
//     if(userName===undefined){
//        console.log("please enter a username")
//        return
//     }
//     return `${userName} just logged in`
//  }

//  console.log(loginUsername("hitesh"))
//  console.log(loginUsername())

 function loginUsername(userName="sam"){
    
    return `${userName} just logged in`
 }

//  console.log(loginUsername())



function calculateCartPrice(...num1){
    
    return num1
}

//console.log(calculateCartPrice(200,300,40,3000))//bcoz of spread/rest operator all the values are stored in the form of an array 
const user={
   username:"hitesh",
   prices:199
}


function handleObject(anyobject){
//   console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`)
}

//handleObject(user)

handleObject({
   username:"yogesh",
   prices :899
})


const myNewArray=[120,34,543,345]

function returnSecondValue(getArray){
   return getArray[1]
}

//console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([200,400,567,345]))