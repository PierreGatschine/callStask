/** @format */

/* const name = "Sunny";

function importantPerson() {
  console.log(this.name + '!');
}

const obj1 = {
  name: "toto",
  importantPerson: importantPerson,
};

const obj2 = {
  name: "lulu",
  importantPerson: importantPerson,
};

obj1.importantPerson(); */

/* const obj = {
  name: "Sunny",
  sing() {
    console.log('a', this);
    var anotherFunc = () => {
      console.log('b', this);
    }
    anotherFunc();
  }
}

obj.sing(); */

/* function a() {
  console.log('toto !')
}

a.apply() */
/* 
const wizard = {
  name: 'Merlin',
  health: 50,
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30,
}

console.log('1', archer);
const healArcher =  wizard.heal.bind(archer, 100, 30);
healArcher();
console.log('2', archer);
 */

/* const array = [1, 2, 3];

function getMaxNumber(arr) {
  return Math.min.apply(null, arr);
}

getMaxNumber(array); */

/* function multiply(a, b) {
  return a * b;
}

let multiply2 = multiply.bind(this, 2);
console.log(multiply2(3)); */

var b = {
  name: 'Sunny',
  say() {console.log(this)}
}
var c = {
  name: 'Sunny',
  say() {return function() {console.log(this)}}
}
var d = {
  name: 'Sunny',
  say() {return () => console.log(this)}
}

d.say()();