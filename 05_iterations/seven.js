const myNumbers=[1,2,3,4,5,6,7,8,9]
// const newNums= myNumbers.map((num)=> num+10)
// const newNums=myNumbers.map((num)=>{
//     return num+10
// })

//chaining

const newNums=myNumbers
                .map((num)=>num*10)  // the values of num  in here is passed to the next map 
                .map((num)=>num+1)   // the values of num are passed to the next filter
                .filter((num)=>num>=40) // we can keep on chaining maps and filters like this  


console.log(newNums)

//map is used to perform some operations
// filter is used to check a condition (true/false)