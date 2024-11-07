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

app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})
