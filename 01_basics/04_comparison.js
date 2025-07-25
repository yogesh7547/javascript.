// console.log("2">1); //Since you’re using a relational operator (>), JavaScript will try to convert the string "2" to a number.
// console.log(2>"1");


// string comparison checks character-by-character from left to right:
// console.log("2" > "10"); // true – because "2" comes after "1" in ASCII
// console.log("12" > "2"); // false – because "1" is less than "2"

// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

//the reason is that equality check(==) and comaprison(<,>,<=,>=) work diffrently 
//comparison convert null to a number treating it as 0


// console.log(undefined==0);// false
// console.log(undefined>0);// false
// console.log(undefined<0);// false


//avoid the types of conversions mentionsed above , it decreases readability of your code and nature of code is not predictable without checking console logging every converion


// strict equality : ===
console.log("2"===2);
// checks the datatype of both and if not same then it doesnt convert and  doesnt compares