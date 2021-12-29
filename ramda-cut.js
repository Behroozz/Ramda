import R from 'ramda'

let arr = [1,2,3,4,5]
let str = 'abcde'

console.log(R.head(arr))
console.log(R.head(str))

console.log(R.last(arr))
console.log(R.last(str))

console.log(R.init(arr))
console.log(R.init(str))

console.log(R.tail(arr))
console.log(R.tail(str))

console.log(R.take(2, arr))
console.log(R.take(2, str))

console.log(R.takeLast(2, arr))
console.log(R.takeLast(2, str))

console.log(R.drop(2, arr))
console.log(R.drop(2, str))

console.log(R.dropLast(2, arr))
console.log(R.dropLast(2, str))
