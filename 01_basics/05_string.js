const name="yogesh";
const repoCount=45;

// console.log(name+ repoCount+"value"); //not preferred way to concatenate strings

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//mordern way known as string interpolation

const gameName= new String('hiteshcc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);// prototype which  contains various methods

// console.log(gameName.length);


// some methods inside prototype

// console.log(gameName.charAt(3));
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('o'));

// const newString=gameName.substring(0,3);//last index is not included
// console.log(newString)

// const anotherString= gameName.slice(-7,3);
// console.log(anotherString);

// const newStringOne="     hitesh     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());// trims out the extra spaces

const url="hitesh/20./https/.com";
console.log(url.replace('hit','ve'));//searches and replaces a part in a string

console.log(url.includes('http'));// to check if something is present or not

console.log(url.split('/')); //splits the string into array of strings according to the seperator mentioned