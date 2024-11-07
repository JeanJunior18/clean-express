export default class CanonicalMessage {
  /**
   * @param {number} id - The ID of the message.
   * @param {string} title - The title of the message.
   * @param {string} description - The description of the message.
   */
  constructor(id, title, description) {
    this.id = id
    this.title = title
    this.description = description
  }
}
