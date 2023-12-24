let str = "amit chaman";

function capitalizeWords(str) {
  // return str.replace(/\b\w/g, match => match.toUpperCase());
  return str.replace(/\b\w/g, match => match.toUpperCase());
}

let result = capitalizeWords(str);
console.log(result);
