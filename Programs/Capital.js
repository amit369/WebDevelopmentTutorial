function capitalFirstLetter(a)
{
    return a.replace(/\b\w/g, (element) => element.toUpperCase());
}

console.log(capitalFirstLetter('amit chaman'));