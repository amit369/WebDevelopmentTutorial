function stringUpper(a)
{
    return a.replace(/\b\w/g, (element) => element.toUpperCase());
}

console.log(stringUpper('amit chaman'));