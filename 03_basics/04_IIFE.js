// immediately invoked function expression

(function chai(){
    //named iife
    console.log(`db connected`)
})();


((name)=>{
    console.log(`db connected ${name}`)
})("yogi");

//always end iife with a semicolon to let it know that it ended otherwise it will throw error