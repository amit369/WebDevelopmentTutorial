const person = {
    name : 'John Doe',
    age : 30
};

const { name, age , tag="No Tag"} = person;

console.log(name);
console.log(age);
console.log(tag);