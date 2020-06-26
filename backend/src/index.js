const express = require('express')
require('./database/mongoose')
const taskRouter = require('./routers/task')
const cors = require('cors')

const app = express()
const port = 8080

app.use(cors())
app.use(express.json())
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})