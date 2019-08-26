const numbers = [1, 2, 3, 4, 5];

const createAddNumber = (number) => (arr) => {
  return arr.map(item => item + number)
}

console.log(createAddNumber(10)(numbers))