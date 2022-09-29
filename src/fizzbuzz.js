// export const fizzbuzz = (num) => {
//   if (typeof num !== 'number') throw new Error('parameter must be a number')
//   if (Number.isNaN(num)) throw new Error('parameter can not be NaN')
//   if (num % 15 === 0) return 'fizzbuzz'
//   if (num % 3 === 0) return 'fizz'
//   if (num % 5 === 0) return 'buzz'
//   return num
// }

// refactor
export const fizzbuzz = (num) => {
  if (typeof num !== 'number') throw new Error('parameter must be a number')
  if (Number.isNaN(num)) throw new Error('parameter can not be NaN')

  const values = {
    fizz: 3,
    buzz: 5,
    woof: 7
  }

  let output = ''
  Object
    .entries(values)
    .forEach(([key, value]) => {
      if (num % value === 0) output += key
    })

  return output === '' ? num : output
}
