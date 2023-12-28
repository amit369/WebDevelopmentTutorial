let str="amit chaman";

let reversestr = str.split("").reduce((a,b) => a = b+a , "");
console.log(reversestr);

const numbers = [1,2,3,4,5];
const newNumbers = [...numbers, 10,20];
console.log(newNumbers);

const obj = {
    name : 'Amit Chaman',
    age : 20
}
const newObj = {...obj , location : 'Delhi'};
console.log(newObj);

function multiply(multiplier, ...numbers)
{
    return numbers.map(num => num *multiplier);
}
const sum = multiply(2,1,2,3,4);
console.log(sum);