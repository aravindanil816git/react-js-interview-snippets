const sum = (a,b) => a+ b;


function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}



const partialed = curry(sum)
// console.log(partialed(4,5))
