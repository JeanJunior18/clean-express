import CanonicalMessage from "../domain/entities/canonical-message.entity.js";
import MessageStatusEnum from "../domain/enums/kafka-topics.enum.js";
import EventEmitter from "../domain/interfaces/event-emitter.js";

export default class PublishCanonicalMessage {
  /**
   * @param {EventEmitter} _eventEmitter 
   */
  constructor(_eventEmitter) {
    this.eventEmitter = _eventEmitter
  }

  /**
   * @param {CanonicalMessage} data
   * @returns {Promise<CanonicalMessage>}
   */
  execute(data) {
    return this.eventEmitter.publish(MessageStatusEnum.CANONICAL_MESSAGE, data)
  }
} 