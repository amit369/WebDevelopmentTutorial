function generateFibonacciSeries( num)
{
     if(num<=1)
     return num;
    else
       return generateFibonacciSeries(num-1) + generateFibonacciSeries(num-2);
}
for(let i=1;i<10;i++)
{
    console.log(generateFibonacciSeries(i));
}