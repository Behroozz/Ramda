import R from 'ramda'

const unsortedArr = [1,3,5,2,7]
// const asc = R.sort((a, b) => a - b)
// const desc = R.sort((a, b) => b - a)

const asc = R.sort(R.ascend(R.identity))
const desc = R.sort(R.descend(R.identity))


console.log(asc(unsortedArr))
console.log(desc(unsortedArr))

const users = [
  { name: 'John'},
  { name: 'Alex'},
  { name: 'James'}
]

const ascByName = R.sort(R.ascend(R.prop('name')))
const descByName = R.sort(R.descend(R.prop('name')))

console.log(ascByName(users))
console.log(descByName(users))

const users2 = [
  { name: 'John'},
  { name: 'james'},
  { name: 'alex'}
]

const sortFn = R.sortBy(
  R.compose(
    R.toLower,
    R.prop('name')
    )
  )
console.log(sortFn(users2))

const users3 = [
  { name: 'alice', age: 40},
  { name: 'bob', age: 30},
  { name: 'clara', age: 40}
]

const ageName = R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name'))
])

console.log(ageName(users3))

