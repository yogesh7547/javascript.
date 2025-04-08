const coding=["pyhton","js","ruby","java"]

// coding.forEach(function(val){
//   console.log(val)
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)//functions can also be passed into for each by giving reference 

// coding.forEach(printMe())// dont execute the function like this , just give its reference


// coding.forEach((item, index, arr)=>{
//    console.log(item, index, arr)
// })


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
         languageName:"javascript",
        languageFileName:"js"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName)
})