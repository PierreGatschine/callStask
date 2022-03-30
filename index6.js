/** @format */
/* 
let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};

let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c = 5;

console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);

let camper = "James"
let camper2 = "Peter"

console.log(camper) */
/* 
let printNumTwo
for (let i = 0; i < 3; i++) {
    if (i === 2) {
        printNumTwo = () => {
            return i
        }
    }
}
console.log(printNumTwo())
console.log(i)
 */
/* function checkScope() {
    let i = "function scope"
    if (true) {
        let i = "block scope"
        console.log("Block scope i is: ", i)
    }
    console.log("Function scope i is: ", i)
    return i
}

checkScope() */

/* const s = [1, 2, 3, 4, 5]
//s = [1, 2, 3]
s[2] = 56
console.log(s) */

/* const s = [5, 7, 2]

function editInPlace() {
    "use strict"
    s[0] = 2
    s[1] = 5
    s[2] = 7
    //return s
}
editInPlace()
console.log(s) */
/* 
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14,
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI); */
/* 
const magic = () => new Date()

console.log(magic());

const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]));

const increment = (number, value = 1) => number + value

console.log(increment(5, 2));
console.log(increment(5));
 */

/* const howMany = (...args) => `You have passed ${args.length} arguments`

console.log(howMany(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(howMany("string", null, undefined, {}));

const sum = (...args) => args.reduce((a, b) => a + b, 0)

console.log(sum(1, 2, 3)) */
/* 
const arr = [1, 2, 3, 4, 5]
const maximus = Math.max(...arr)
console.log(maximus)
const minimus = Math.min(...arr)
console.log(minimus)
 */
/* 
const user = {
    name: "John",
    age: 32
}

const { name, age } = user

console.log(name, age)

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

console.log(today, tomorrow); */

1 == "1";
console.log(false == {});

if(1){
    console.log(5);
}
