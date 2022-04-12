/* const a = () => {
    let grandpa = 'grandpa'
  return b = () => {
    let father = 'father'
    let randon = 124
    console.log(randon)
    return c = () => {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

console.log(b())


// Language: javascript
const aa = () => {
    let message = 'hello'
    console.log(message)
    return message
    }

    console.log(aa()) */
/* 
const makeCounter = () => {
    let count = 0
    return function() {
        return count++
    }
}

let counter = makeCounter()
let counter2 = makeCounter()

console.log(counter())
console.log(counter2())
console.log(counter())
console.log(counter2())
console.log(counter()) 
console.log(counter2()) 
 */

/* function Counter() {
    let count = 0
    this.up = () => ++count
    this.down = () => --count
}

let counter = new Counter

console.log(counter.up())
console.log(counter.up())
console.log(counter.down())

 */
/* const f = () => {
    let value = Math.random()
    console.log(value)
    return () => {console.log(value)   }
}

let arr = [f(), f(), f()]

console.log(arr[1])

const k = () => {
    let values = 'hello'
    console.log(values)
    return () => {console.log(values)   }
}

let arr2 = [k(), k(), k()]

console.log(arr2[1])
console.log(k()) */

/* let name = "John"

const sayHi = () => {
    console.log(`Hi, ${name}`)
}

name = "Pete"

console.log(sayHi()) */
/* 
const makeWorker = () => {
    let name = 'Pete'
    return () => {
        console.log(`Hello, ${name}`)
    }
}

let name ="Toto"

let work = makeWorker()

console.log(work()) */


/* const boo = (string) => (name) => (name2) => 
    console.log(`${string} ${name} ${name2}`)

boo('Hello')('Pete')('John') */

const callMeMaybe = () => {
    const callMe = 'Hi! I am now here!'
    setTimeout(() => {
        console.log(callMe)
    }, 4000)
}

callMeMaybe()
