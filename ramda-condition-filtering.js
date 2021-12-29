import R from 'ramda'

const products = [
  {name: 'Jacket', price: 50, category: 'clothes', count: 20},
  {name: 'Boots', price: 120, category: 'clothes', count: 30},
  {name: 'Iphone', price: 600, category: 'electronics', count: 5},
  {name: 'Ipad', price: 300, category: 'electronics', count: 10}
]

// array of names in category cloth, where count less than 50 and price less than 100

const getSelectedItem = (products) => {
  const clothes = products.filter(
    product => product.category === 'clothes' && product.price < 100 && product.count < 50
  )
  return clothes.map(cloth => cloth.name)
}
console.log(getSelectedItem(products))


// Ramda 1
// const getProductName = R.compose(
//   R.pluck('name'),
//   R.filter(product => product.category === 'clothes' && product.price < 100 && product.count < 50)
// )
// console.log(getProductName(products))

const getProductName = R.compose(
  R.pluck('name'),
  R.filter(R.where({
    category: R.equals('clothes'),
    count: R.lt(R.__, 50),
    price: R.lt(R.__, 100)
  }))
)
console.log(getProductName(products))

