import R from 'ramda'

const toSlug = input => {
  const words = input.split(' ')
  const lowercasedWords = words.map(word => word.toLowerCase())
  const slug = lowercasedWords.join('-')
  const encodedSlug = encodeURIComponent(slug)
  return encodedSlug
}
const slug = toSlug('This is composition') // --> this-is-composition
console.log('slug', slug)

const toSlugComp = input => encodeURIComponent(
  input.split(' ')
    .map(str => str.toLowerCase())
    .join('-')
)
console.log('toSlugComp', toSlugComp('This is composition'))

// Ramda 1
const toSlugR1 = input => 
 encodeURIComponent(
  R.join('-')(
    R.map(R.toLower)(
      R.split(' ')(input)
    )
  )
 )
console.log('toSlugR1', toSlugR1('This is composition'))

const toSlugR2 = input => R.compose(
  encodeURIComponent,
  R.join('-'),
  R.map(R.toLower),
  R.split(' ')
)(input)

console.log('toSlugR2', toSlugR2('This is composition'))

const toSlugR3 = R.compose(
  encodeURIComponent,
  R.join('-'),
  R.map(R.toLower),
  R.split(' ')
)

console.log('toSlugR3', toSlugR3('This is composition'))