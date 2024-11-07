import EventEmitter from "../../domain/interfaces/event-emitter.js"

export default class KafkaEventPublisher extends EventEmitter {
  constructor() { 
    super()
  }

  /**
   * @param {string} eventName 
   * @param {unknown} payload 
   */
  async publish(eventName, data) {
    console.log('Publicar evento', eventName, 'com os dados', data)
    return {
      topic: eventName,
      data
    }
  }
}