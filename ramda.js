import R from 'ramda'

const arr = [1,2,3]
const newArr = R.append(4, arr)
console.log(arr)
console.log(newArr)

const users = [
  {
    id:1,
    name:'John'
  },
  {
    id:2,
    name:'Alex'
  },
  {
    id:3,
    name:'Bill'
  },
]

const John = users.find(user => user.id === 1)
console.log(John)

// R.propEq('id', 2, {id: 2})
const isAlex = R.propEq('id', 2)
const alex2 = R.find(isAlex, users)
console.log(alex2)


const testUser = {
  age: 20,
  birthCountry: 'UK'
}

// Plain
const wasBornInCountry =  person => person.birthCountry === 'UK'
const wasNatruralized = person => Boolean(person.naturalizationDate)
const isOver18 = person => person.age >= 18
const isCitizen = person => wasBornInCountry(person) || wasNatruralized(person)
const isEligableToVote = person => isOver18(person) && isCitizen(person)


// Lamda --> Point free function without arguments
const wasBornInCountryR = R.propEq('birthCountry', 'UK') 
const isCitizenR = R.either(wasBornInCountryR,wasNatruralized)
const isEligableToVoteR = R.both(isOver18, isCitizenR)

// result
console.log(isEligableToVote(testUser))
console.log(isEligableToVoteR(testUser))

// using a function for multuple places
const idEquals = R.propEq('id')
const ishim = idEquals(2, {id: 2, name: 'he'})
const isFirstPost = idEquals(1, {id: 1, title: 'My first post'})

