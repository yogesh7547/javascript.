// let myName= "yogesh    "
// console.log(myName.trueLength);

let myHeroes=['thor','spiderman']

let heroPowers={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}


Object.prototype.hitesh= function(){
    console.log('hitesh is presetn')
}

Array.prototype.heyHitesh= function(){
    console.log(`hitehs says hlo`)
}

// heroPowers.hitesh()
// myHeroes.hitesh()

// myHeroes.heyHitesh()
// heroPowers.heyHitesh()




//inheritance


const user={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

/*
TASupport is a normal object.

But by setting __proto__: TeachingSupport, you're saying:

“Hey JS, if you don’t find a property on TASupport, look inside TeachingSupport.”
 */

Teacher.__proto__=user
// console.log(Teacher.name)


//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)




let anotherUsername="chaiandcode    "

String.prototype.trueLength=function(){
    console.log(`${this}`)
    console.log(` the true length is : ${this.trim().length}`)
}

anotherUsername.trueLength();
"hitesh".trueLength()
"yogi   ".trueLength()