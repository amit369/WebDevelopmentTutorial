function checkPalindrome(str)
{
    // let j=str.length-1;
    // for(let i=0;i<str.length/2;i++)
    // {
    //     if(str[i]!=str[j])
    //     return false;
    //     j--;
    // }
    // return true;
    return str === str.split("").reverse().join("");
}
let str1="aman";
let str2="aba";
console.log(checkPalindrome(str1));
console.log(checkPalindrome(str2));