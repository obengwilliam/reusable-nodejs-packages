const { expect } = require('chai')
const logger = require('./logger')

describe('Logger', () => {
  it('should be a function', () => {
    expect(logger).to.be.a('function')
  })
  it('should have an info function', () => {
    expect(logger().info).to.be.a('function')
  })
})
