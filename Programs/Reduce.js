const arr = [5,7,1,8,4];

const sum = arr.reduce(function(accumulator, currentvalue)  {
       return accumulator+currentvalue
}, 0);

console.log(sum);