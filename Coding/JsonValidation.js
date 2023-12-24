const data = [
    {
        id : 10,
        amount : 100
    },
    {
        id : 11,
        amount : 200
    },
    {
        id : 12,
        amount : 300
    }
];
let totalamount=0;

let newdata = data.forEach((item) => {
    totalamount += item.amount;
})
console.log(totalamount);