const myObj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`)
}


const programming=["js","py","cpp","java" ]

for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}



const map= new Map()
map.set('IN','india')
map.set('USA','united states of america')

// for (const key in map) {
//     console.log(key)
// }//maps not iterable in this way