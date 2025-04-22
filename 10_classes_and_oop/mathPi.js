const descriptor=Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor) 

// console.log(Math.PI)
// Math.PI=8;
// console.log(Math.PI) // cant override the value like this 


const chai= {
    name:'ginger chai',
    price:250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))


Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}