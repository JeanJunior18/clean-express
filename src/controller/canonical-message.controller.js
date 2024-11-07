import { Router } from 'express'
import PublishCanonicalMessage from '../use-cases/publish-canonical-message.use-case.js'
import KafkaEventPublisher from '../infrastructure/kafka/kafka-event-publisher.js'

const router = Router()
const eventEmitter = new KafkaEventPublisher()

/**
 * @swagger
 * tags:
 *   - name: Kafka
 *     description: Endpoints related to Kafka messaging
 * /publish:
 *   post:
 *     summary: Publish a message on Kafka
 *     tags: [Kafka]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             additionalProperties: true  # Permite propriedades adicionais de forma livre
 *           example:
 *             key1: "value1"
 *             key2: "value2"
 *     responses:
 *       200:
 *         description: Message published successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 topic:
 *                   type: string
 *                   example: "CANONICAL_MESSAGE"
 *                 data:
 *                   type: object
 *                   additionalProperties: true  # Permite dados livres dentro de "data"
 *             example:
 *               topic: "CANONICAL_MESSAGE"
 *               data:
 *                 key1: "value1"
 *                 key2: "value2"
 */
router.post('/publish', async (req, res) => {
  const publishCanonicalMessage = new PublishCanonicalMessage(eventEmitter)
  const message = await publishCanonicalMessage.execute(req.body)
  return res.json(message)
})

export default router
