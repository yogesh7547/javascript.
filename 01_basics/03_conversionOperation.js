let score ="33acd"


//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber= Number(score);
//console.log(typeof valueInNumber);//now it says it has converted score into a number but it cannot since it has letters in it 

//console.log(valueInNumber);// it will give  NaN in terminal, that is Not a Number


//"33"=>33
//"33abc"=>Nan
//true=>1, false=>0
//"adcas"=>NaN
//null=>0
//undefined=>NaN


let isLoggedIn=1;

let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

//1=>true ;  0=>false
//""=>false ;  
//"yogi"=> true

let someNumber= 33;
let stringNumber= String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);


//*****************operations*******************


// console.log(2**3);  //  two res to power 3

let str1="hi";
let str2=" paaji";

let str3= str1+str2;

//console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);//if string is observed first from the left then  js converts every next number into string 
// console.log(2+2+"1");//otherwise it performs the operation forst and then adds string to it 

let num=10;
console.log(num);


let num2= num++;
console.log(num2);
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.


let num3=++num;
console.log(num3);
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.