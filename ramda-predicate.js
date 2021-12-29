import R from 'ramda'

const users = [
  { name: 'Alex', isActive: false},
  { name: 'Jack', isActive: true},
  { name: 'John', isActive: true }
]

const isAllActive = R.all(R.propEq('isActive', true))
console.log(isAllActive(users))


const atLeastOneActive = R.any(R.propEq('isActive', true))
console.log(atLeastOneActive(users))


const noneActive = R.none(R.propEq('isActive', true))
console.log(noneActive(users))


const users2 = { name: 'Alex', isActive: false, role: 'admin'}

const isActiveAdmin = R.allPass([
  R.propEq('isActive', false),
  R.propEq('role', 'admin')
])
console.log(isActiveAdmin(users2))

const isActiveAdmin2 = R.anyPass([
  R.propEq('isActive', true),
  R.propEq('role', 'admin')
])
console.log(isActiveAdmin2(users2))
