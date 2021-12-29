// curying
// split function to small pieces and easy to use
const curry = (fn) => {
  // store total amount of arguments
  const arity = fn.length
  // console.log(arity)
  return function f1(...args) {
    if(args.length >= arity) {
      return fn(...args)
    } else {
      // if we dont have enough arguments
      return function f2(...moreArgs) {
        // we concat args with more ards
        const newArgs = args.concat(moreArgs)
        // do recurssion unitl we have enough args
        return f1(...newArgs)
      }
    }
  }
}

const add = (a, b, c) => {
  return a + b + c
}

const curriedAdd = curry(add)
const reuslt = curriedAdd(1)(2)(3)
console.log(reuslt)
