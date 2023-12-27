const person1 = { name : 'John'};
const person2= { name : 'Amit'};
function greet(greeting)
{
    console.log(`${greeting}, ${this.name}`);
}
greet.call(person1,'Hello');
greet.call(person1,'Hi');
