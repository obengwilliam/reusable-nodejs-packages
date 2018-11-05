'use strict'
function logger () {
  return {
    info (msg) {
      console.info(msg)
    }
  }
}

module.exports = logger
