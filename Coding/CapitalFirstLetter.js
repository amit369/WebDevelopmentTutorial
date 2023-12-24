let str = "amit chaman";
function capitalizeLetter(item) 
{
    return item.replace(/\b\w/g, (match) => match.toUpperCase());
   // return str.replace(/\b\w/g, match => match.toUpperCase());
}

console.log(capitalizeLetter(str));