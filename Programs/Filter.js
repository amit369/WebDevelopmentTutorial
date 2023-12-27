const persons = [{name : 'Amit Chaman', age : 10},
{name : 'Sunil Kumar', age : 20},
{name : 'Mukesh Kumar', age : 30},]

const fullAge = persons.filter((item) => item.age > 10);
console.log(fullAge);