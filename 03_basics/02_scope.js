if(true){
    let a=23
const b=543
var c=98 // can be accessed outside the of statement 
d=22   // can be accessed outside the of statement 
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
        // console.log(username+website);
        }
        // console.log(website)
}
// console.log(username)


// *************************************************************************

addOne(5)
function addOne(num){
    return num+1
}//This works! Because function declarations are hoisted — JavaScript moves the entire function to the top of the scope during the compilation phase.
// So, even though you call addOne(5) before defining it, it works just fine.


addTwo(5)//we cant use the funtion before declaration in this type of declaration
const addTwo= function (num){
    return num+2
}
//const addTwo is hoisted, but its value (the function) is not.
// So during the hoisting phase, addTwo exists in memory, but it’s undefined.


//       Type             |        Hoisted?                  | Callable before declaration?
// function foo() {}      | ✅ Yes                          | ✅ Yes
// const foo = () => {}   | ✅ Partially (name hoisted)     | ❌ No
// var foo = function(){} | ✅ Name hoisted, but undefined  | ❌ No