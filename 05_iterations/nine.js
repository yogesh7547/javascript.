const myNums=[1,2,3]

// const myTotal= myNums.reduce(function(acc,currVal){
//     console.log(`acc:${acc} currVal:${currVal}`)
//     return acc+currVal
// },0)

const myTotal= myNums.reduce((acc, currVal)=>acc+currVal ,0)

// console.log(myTotal)

const shoppingCart=[
    {
        itemName:'js course',
        price:2999
    },
    {
        itemName:' java course',
        price:5000
    },
    {
        itemName:'cp course',
        price:3999
    },
    {
        itemName:'drawing course',
        price:400
    },
]

const totalPrice= shoppingCart.reduce((acc,item)=>{
    return acc+item.price; 
},0)

console.log(totalPrice)