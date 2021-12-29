import R from 'ramda'

const user = {
  name: 'John',
  surname: 'Flint'
}

// const nameLens = R.lens(R.prop('name'), R.assoc('name'))
const nameLens = R.lensProp('name')

// { name: 'John', surname: 'Flint' } 
// const name = R.view(nameLens, user)
// const upperName = R.toUpper(name)
// const result3 = R.set(nameLens, upperName, user)
const result3 = R.over(nameLens, R.toUpper, user)
console.log('result', result3)
// { name: 'JOHN', surname: 'Flint' } 

