
/* const woohooo = () => {
  console.log("woohooo");
};

woohooo.name; */


/* function a(fn) {
    fn()
}

a(function() {console.log("woohooo")}) */


/* class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}


const zeus = new SpaceShuttle("Jupiter");

const { targetPlanet } = zeus;

console.log(targetPlanet); */

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); 


class Thermostat {
    constructor(temp) {
        this._temp = 5/9 * (temp - 32);
    }

    get temperature() {
        return this._temp;
    }

    set temperature(temp) {
        this._temp = temp;
    }
}

const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);