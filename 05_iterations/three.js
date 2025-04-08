//for of

// [{},{},{}]
// ["","",""]
const arr=[1,2,3,4,5]
for (const val of arr) {
    // console.log(val)
}


const greet="hello"
for (const char of greet) {
    // console.log(`each char is ${char}`)
}

//maps

const map= new Map()
map.set('IN','india')
// map.set('IN','india') // doesnt take same value twice
map.set('USA','united states of america')

// console.log(map)

for (const key of map) {
    // console.log(key)
}// returns  the key and value in the form of array

for (const [key,value] of map) {
    // console.log(key, value)
    // console.log(typeof key)
}// returns as a string


const myObj={
    'game1':'nfs',
    'game2':'spiderman'
}

// for (const [key, value] of myObj) {
//         console.log(key,value)
// }// object is not iterable in this way