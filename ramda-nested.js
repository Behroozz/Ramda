import R from 'ramda'

const bill = {
  nicknale: 'bill',
  country: 'UK',
  personal: {
    profile: {
      name: 'Bill',
      surname: 'Williams',
      age: 20
    }
  }
}

const mike = {
  nickname: 'Mike',
  country: 'US',
  personal: {}
}

const getSurname = user => user.personal.profile.surname
const getSurnameCheck = user => 
  user && 
  user.personal && 
  user.personal.profile && 
  user.personal.profile.surname

console.log(getSurname(bill))
// console.log(getSurname(mike))

const getSurnameR = user => R.pathOr('no set',['personal', 'profile', 'surname'], user)
console.log(getSurnameR(bill))
console.log(getSurnameR(mike))
