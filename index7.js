
/* const myBio = (firstName, lastName, ...otherInfo) => otherInfo;

console.log(myBio("Toto", "DeLaVega", "france", 42, "male"));

const myBio2 = (firstName, lastName, company) => `${firstName} ${lastName} runs ${company}`

console.log(myBio2(...["titi", "Tutu", "Coros"])) */


/* const [firstName, lastName, ...otherInfo] = [
  "Toto",
  "DeLaVega",
  "france",
  42,
  "male",
];

console.log(otherInfo)
 */
/* const {firstName, lastName, ...otherInfo} = {
  firstName: "Toto",
  lastName: "DeLaVega",
  country: "france",
  age: 42,
  genre: "male",
};

console.log(otherInfo ); */
/* 
let nameSpecial = "toto"

const nameType = (name) => name === "Titi" ? name : `Désolé, je n'aime pas ce type ${name}`

let firstName = { namePrefed: "Tutu", getName: nameType("Titi"), special: nameSpecial }

console.log(firstName.getName);
console.log(firstName.special);
console.log(firstName.namePrefed);

 */
/* const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addNum = (num1, num2, ...num6) => num1 + num6;


console.log(addNum(...num)); */


/* const message = `Toto
prends sa voiture
tout les matins.`

console.log(message) */

/* const name = "Toto";

console.log(`Bonjour ${name}`);

const result = 5 + 5

console.log(`Le résultat est ${result}`)


console.log(`${result < 9 ? 'Too low' : 'Very high'} ` );
 */
/* 
const name = "Toto";

const tagExemple = strings => strings

const result = tagExemple`Bonjour Jack`

console.log(result);
 */

/* let rep = 41
let plus = 2
console.log(`la response est ${rep + plus}`)

const tagExemple = strings => strings

const result = tagExemple`Bonjour Jack`

console.log(result); */
/* 
const person = {
    name: "Toto",
    age: 42,
}
console.log(typeof person);

const { name, age} = person

const greeting = `Bonjour ${name}, 
tu as ${age} ans`

console.log(greeting); */

/* const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};


const { success, failure, skipped } = result;
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(skipped);

console.log(failuresList); */

/* 
let user = {
  name: "Toto",
  age: 42,
  isAdmin: false,
  "likes birds": true
};

delete user.age

console.log(user);
console.log(user.name);
console.log(user["likes birds"]);
console.log(!user.isAdmin); */

/* let fruit = prompt("quel est votre fruit préféré ?", "banane");

let bag = {
    [fruit]: 5,
}

console.log(bag.banane); */
/* 
const createPerson = (name, age, gender) => {
    return { 
        name, 
        age, 
        gender
    }
}

console.log(createPerson("toto", 52, "male"))

const obj = {
    two() {
        return 2
    } 
}

console.log(obj.two());

const three = () => 3

console.log(three.call());


const four = new Function('return 4')

console.log(four())

const fourNum = new Function('num', 'return num === 4')

console.log(fourNum(4))
 */







