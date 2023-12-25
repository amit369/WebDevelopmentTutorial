let str ="sumit bansal",reversestr;
reversestr = str.split('').reverse().join('');
console.log(reversestr);

function checkPalindrome(str2) 
{
    return str2 == str2.split("").reverse().join("");
}
console.log(checkPalindrome('abab'));