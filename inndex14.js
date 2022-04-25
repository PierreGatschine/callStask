
/* 
let dragon = {
    name: "Tanya",
    fire: true,
    fight() {
        return 5;
        },
    sign() {
        if (this.fire) {
            return `I'm ${this.name}, the breather of the fire`;
        }
    }
}

let lizard ={
    name: "Kiki",
    fight() {
        return 1;
    }
} */

//const singLizard = dragon.sign.bind(lizard);

lizard.__proto__ = dragon;

for (let prop in lizard) {
    if (lizard.hasOwnProperty(prop)) {
        console.log(prop)
    }
}

/* console.log(lizard.sign());
console.log(lizard.fire);
console.log(lizard.fight()); */


//console.log(singLizard());

/* console.log(dragon.sign());
console.log(dragon.fight());

console.log(dragon.isPrototypeOf(lizard)); */

/* let human = {
    mortal: true
}

let socrates = Object.create(human);
socrates.age = 70
console.log(socrates);
console.log(human.isPrototypeOf(socrates));
 */

/* Date.prototype.lastYear = function() {
    return this.getFullYear() - 1;
}
console.log(new Date('2022-10-10').lastYear()); */

Array.prototype.map = function() {
    let arr = []
    for (let i = 0; i < this.length; i++) {
        arr.push(this[i] + ' 🗺️');
    }
    return arr;
}

console.log([1, 2, 3].map()); 