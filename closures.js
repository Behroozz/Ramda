// clouser inner function that can access outer variable
// clouser only is used for storing data
const addTo = (passed) => {
  const add = (inner) => {
    return passed + inner
  }
  return add
}

// console.dir(addTo(2))
// const addTwo = addTo(2)
// console.log(addTwo(1))



