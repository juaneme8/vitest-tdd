import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })
  it('should throw if no number is provided', () => {
    expect(() => fizzbuzz()).toThrow()
  })
  it('should throw specific message if no number is provided', () => {
    expect(() => fizzbuzz()).toThrow(/number/)
  })
  it('should throw specific message if NaN is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow(/NaN/)
  })
  // it('should return 1 if number provided is 1', () => {
  //   expect(fizzbuzz(1)).toBe(1)
  // })
  // it('should return 2 if number provided is 2', () => {
  //   expect(fizzbuzz(2)).toBe(2)
  // })
  it('should return number if number its not multiple of 3 nor 5', () => {
    expect(fizzbuzz(1)).toBe(1)
    expect(fizzbuzz(2)).toBe(2)
    expect(fizzbuzz(4)).toBe(4)
  })
  // it('should return "fizz" if number provided is 3', () => {
  //   expect(fizzbuzz(3)).toBe('fizz')
  // })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  // it('should return "buzz" if number provided is 5', () => {
  //   expect(fizzbuzz(5)).toBe('buzz')
  // })
  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
  })

  // it('should return "fizzbuzz" if number provided is 15', () => {
  //   expect(fizzbuzz(15)).toBe('fizzbuzz')
  // })
  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
    expect(fizzbuzz(45)).toBe('fizzbuzz')
  })
  it('should return "woof" if number provided is multiple of 7', () => {
    expect(fizzbuzz(7)).toBe('woof')
    expect(fizzbuzz(14)).toBe('woof')
  })
})
