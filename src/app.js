import express from 'express'
import CanonicalMessageController from './controller/canonical-message.controller.js'

const app = express()
app.use(express.json())
app.use('/message', CanonicalMessageController)

app.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})