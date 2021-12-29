import R from 'ramda'

const isValidArray = [6, 3, 2, 5, 2]
const isInvalidAr = [3, 4, 6, 1]

const isFirstElementBiggest = elements => elements[0] === elements.sort((a, b) => b - a)[0]
console.log(isFirstElementBiggest(isValidArray))
console.log(isFirstElementBiggest(isInvalidAr))

// const isFirstElementBiggestR = R.converge(R.equals, [
//   elements => elements[0],
//   elements => elements.sort((a, b) => b - a)[0]
// ])

// const isFirstElementBiggestR = R.converge(R.equals, [
//   R.head,
//   elements => R.head(R.sort(R.descend(R.identity))(elements))
// ])

const sortByBiggestFirst = R.sort(R.descend(R.identity))

const isFirstElementBiggestR = R.converge(R.equals, [
  R.head,
  R.compose(
    R.head,
    sortByBiggestFirst
  )
])

console.log(isFirstElementBiggestR(isValidArray))
console.log(isFirstElementBiggestR(isInvalidAr))

