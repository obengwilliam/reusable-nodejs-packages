const { expect } = require('chai')
const queue = require('./queue')

describe('Queue Lib', () => {
  it('should be a function', () => {
    expect(queue).to.be.a('function')
  })
  it('should have a publish function', () => {
    expect(queue().publish).to.be.a('function')
  })

  it('should have a subscribe function', () => {
    expect(queue().subscribe).to.be.a('function')
  })
})
