const obj1 = { user: { role: 'admin', op:[1,2,3] } };
const clonedObj1 = deepClone(obj1);

clonedObj1.user.role = 'guest'; // Change the cloned user's role to 'guest'.
console.log(clonedObj1.user.role); // 'guest'
console.log(obj1.user.role); // Should still be 'admin'.
// console.log(clonedObj1); // Should still be 'admin'.


const obj2 = { foo: [{ bar: 'baz' }] };
const clonedObj2 = deepClone(obj2);

obj2.foo[0].bar = 'bax'; // Modify the original object.
console.log(obj2.foo[0].bar); // 'bax'
console.log(clonedObj2.foo[0].bar); // Should still be 'baz'.

// {
//   role: 'admin'
// }

// recurse
// if object[key] !== "object"
// just copy
// else create a new Object

// got throu each key and get values and call to thus above fn


function deepClone(obj) {
  // if type is object && array
  // create new array 
  // loop through intialt array and map it to deepClone
  //return obj
  
  
  // if type is object && !array
  // create new object 
  // loop through intialt object keys and asign each to new Object
  //return obj
  if(typeof obj === "object") {
    let newObj = Array.isArray(obj) ? [] : {};
    Object.keys(obj).forEach(key => {
      newObj[key] = deepClone(obj[key])
    });
    return newObj
  } 
  return obj
  
  
}
