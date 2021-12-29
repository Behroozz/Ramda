import R from 'ramda'

const res = R.converge(R.equals, [
  R.head,
  R.last
])([1,2,3,4,5,1])

console.log('res', res)

const res2 = R.useWith(R.max, [R.inc, R.dec])(2,3)
console.log(res2)


// remove last time and replace
// const reducer = (state, action) => {
//   const cutted = R.init(state)
//   console.log(cutted)
//   return R.append(action.payload, cutted)
// }

// call useWith calling function on several args, 
// array of functions and finally one on the result
const reducer = R.useWith(
  R.flip(R.append),
  [
    R.init,
    R.prop('payload')
  ]
)

const state = [1,2,3]
const action = {
  payload: 1
}

const newState = reducer(state, action)
console.log('newState', newState)