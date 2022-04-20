/* const hi = (string= "Toto") => {
    return `Hello ${string}`;
}

console.log(hi("Peter"))

const heavyDuty = (index) => {
    const bigArray = new Array(7000).fill('😃');
    console.log('created!')
    return bigArray[index];
}

console.log(heavyDuty(4));
console.log(heavyDuty(4));
console.log(heavyDuty(4));
console.log(heavyDuty(4));



const heavyDuty2 = () => {
    const bigArray = new Array(7000).fill('😃');
    console.log('created again!')
    return (index) => bigArray[index];
    
}

const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(4))
console.log(getHeavyDuty(5))
console.log(getHeavyDuty(6))
console.log(getHeavyDuty(7))
 */

/* const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return '💥';
    }
    setInterval(passTime, 100);
    return {
        //launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();

console.log(ohno.launch()); */

let view;
const initialize = () => {
    view = '🚵';
    console.log('view has been set!')
}

initialize();
initialize();
initialize();
console.log(view);
