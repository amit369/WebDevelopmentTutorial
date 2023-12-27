function reverse(str) {

    return str.split("").reduce((a,b)=> a = b + a ,"")
    }

    console.log(reverse('Amit Chaman'));

    function StringReverse(str)
    {
      var strrev='';
      for(let i=str.length-1;i>=0;i--)
      {
        strrev += str[i];
      }
      return strrev;
    }
    console.log(StringReverse('Amit Chaman'));