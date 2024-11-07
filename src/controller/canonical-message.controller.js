import { Router } from 'express'
import PublishCanonicalMessage from '../use-cases/publish-canonical-message.use-case.js'
import KafkaEventPublisher from '../infrastructure/kafka/kafka-event-publisher.js'

const router = Router()
const eventEmitter = new KafkaEventPublisher()

router.post('/publish', async (req, res) => {
  const publishCanonicalMessage = new PublishCanonicalMessage(eventEmitter)
  const message = await publishCanonicalMessage.execute(req.body)
  return res.json(message)
})

export default router