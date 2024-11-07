import express from 'express'
import CanonicalMessageController from './controller/canonical-message.controller.js'
import swagger from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description:
        'API documentation for my Express app using Clean Architecture.'
    }
  },
  apis: ['./src/controller/*.js']
}

const app = express()
app.use(express.json())

app.use('/message', CanonicalMessageController)
const swaggerSpec = swaggerJSDoc(options)
app.use('/api', swagger.serve, swagger.setup(swaggerSpec))

app.use((req, res) => {
  res.status(404).send('Route not found')
})

app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})

process.on('uncaughtException', (error) => {
  console.error('Exceção não capturada:', error)
})
process.on('unhandledRejection', (reason) => {
  console.error('Promessa não tratada rejeitada:', reason)
})
