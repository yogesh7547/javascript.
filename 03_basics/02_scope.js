if(true){
    let a=23
const b=543
var c=98 // can be accessed outside the if statement 
d=22   // can be accessed outside the if statement 
}

// console.log(a)  

//console.log(b)  

//console.log(c)  


//console.log(d) 


let value=100 //globally scoped

if(true){
    let value=45 //locally scoped
    // console.log("inner value:", value)
}

//console.log("outer value: " ,value)

function one (){
    const username="hitesh"

    function two(){
        const website= "youtube"
        //console.log(username)
    }
    // console.log(website)

    two()
}

one()


if(true){
    const username="hitish"
    if(username==="hitish"){
        const website="youtube"
        //console.log(username+website);
        }
        // console.log(website)
}
// console.log(username)


// *************************************************************************

addOne(5)
function addOne(num){
    return num+1
}


addTwo(5)//we can use the funtion before declaration in this type of declaration
const addTwo= function (num){
    return num+2
}

