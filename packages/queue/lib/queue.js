'use strict'

module.exports = queue

function queue () {
  return {
    publish (topic, message) {
      console.log(`Publised message to ${topic}`)
    },
    subscribe (topic) {
      console.log(`Subscribing to topic ${topic}`)
    }
  }
}
