import R from 'ramda'

const strudents = [
  { name: 'Alex', 'score': 84, isActive: true},
  { name: 'Jack', 'score': 65, isActive: false},
  { name: 'John', 'score': 46, isActive: true}
]

const byScore = R.groupBy(
  strudent => 
    strudent.score > 50 ? 'positive' : 'negative'
)

console.log(byScore(strudents))


const byActivity = R.groupBy(
  R.prop('isActive')
)

console.log(byActivity(strudents))
