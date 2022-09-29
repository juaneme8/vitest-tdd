import { describe, expect, it } from 'vitest'

const canReconfigure = (from, to) => {
  if (from === undefined) throw new Error('from parameter is missing')
  if (typeof from !== 'string') throw new Error('from parameter must be a string')

  if (to === undefined) throw new Error('to parameter is missing')
  if (typeof to !== 'string') throw new Error('to parameter must be a string')
  if (from.length !== to.length) return false

  return true
}

describe('can-configure', () => {
  it('should be a function', () => {
    expect(canReconfigure).toBeTypeOf('function')
  })
  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })
  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })
  it('should throw if second parameter is missing', () => {
    expect(() => canReconfigure('a')).toThrow()
  })
  it('should throw if second parameter is not a string', () => {
    expect(() => canReconfigure('a', 2)).toThrow()
  })
  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('should return false if from and to have different lengths', () => {
    expect(canReconfigure('a', 'bb')).toBe(false)
  })
})
