import R from 'ramda'

const toSlug = R.compose(
  encodeURIComponent,
  R.tap(console.log),
  R.join('-'),
  // words => {
  //   console.log('words', words)
  //   return words
  // },
  R.tap(console.log),
  R.map(word => {
    // console.log('word',word )
    return R.toLower(word)
  }),
  R.tap(console.log),
  R.split(' '),
  R.tap(console.log),
)

console.log(toSlug('This is composition'))

