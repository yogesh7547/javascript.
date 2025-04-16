const marvel_heroes=['thor','ironman','hulk']
const dc_heroes=['superman','flash','wonderwoman']

// marvel_heroes.push(dc_heroes); // puts the array dc_heroes inside the array marvel-heroes
// console.log(marvel_heroes);

// const allHeroes= marvel_heroes.concat(dc_heroes)// creates a new array and concatenates both the arrayus in the new array
// console.log(allHeroes)

//spread operator (preferred way to join arrays)

const villains=['siuuu','messi']

const all_new_heroes=[...dc_heroes,...marvel_heroes,...villains]
// console.log(all_new_heroes)

const another_arr=[1,[2,5,45],3,[56,56,[2,3,4]],2,12,90]

const real_another_arr=another_arr.flat(Infinity);//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_arr);


console.log(Array.isArray("hiteh"));
console.log(Array.from("hiteh"))
console.log(Array.from({name:"hiteh",age:23}))//intresting
// Now, what is { name: "hiteh", age: 23 }?
// It's a plain object.
// It’s not iterable.
// It’s not array-like (doesn’t have a length or numeric indexes).

let score1=23;
let score2=3;
let score3=2;

console.log(Array.of(score1,score2,score3));
