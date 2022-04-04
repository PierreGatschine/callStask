/* 

const mixedNumbers = (arr) => {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);

    return arr;
}

mixedNumbers(['IV', 5, 'six']);


const mixedNumbers2 = (arr) => {
    //arr.pop();
    arr.shift();

    return arr;
}

console.log(
    mixedNumbers2(['IV', 5, 'six'])
);
 */
/* 
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

console.log(arr.splice(1, 4)); */

/* const htmlColorNames = (arr) => {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');

    return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
); */
/* 
const forecast = (arr) => {

    return arr.slice(2, 4)
}

console.log(
    forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]))
 */
/* 
const spreadOut = (arr1, arr2, arr3) => {
    let fragment = ['to', 'code'];
    let sentence = [arr1, ...fragment, arr2, arr3];

    return sentence;
}

console.log(spreadOut('learn', 'is', 'fun'));

const spreadOut2 = () => {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment, "is", "fun"];

    return sentence;
}

console.log(spreadOut2()); */

const quickCheck = (arr, elem) => {
    return arr.indexOf(elem) != -1;
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));