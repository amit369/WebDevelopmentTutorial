let object={
    name : 'Amit',
    Lastname : 'Chaman'
};
var MainObj = {

    prop1: "prop1MainObj",
    
    Obj1: {
      prop1: "prop1Obj1",
      prop2: "prop2Obj1",    
      Obj2: {
        prop1: "hey you",
        prop2: "prop2Obj2"
      }
    },
      
    Obj3: {
      prop1: "prop1Obj3",
      prop2: "prop2Obj3"
    },
    
    Obj4: {
      prop1: true,
      prop2: 3
    }  
  };

console.log(Object.keys(object).length);
console.log(Object.keys(MainObj));
console.log(MainObj.Obj1.Obj2.prop1);