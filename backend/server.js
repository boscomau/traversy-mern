const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 500



connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))


app.use(errorHandler)

app.use((req, res) => {
    res.status(404).json({message: 'Not Found !!'})
})

app.listen(port, () => console.log(`Server started on port ${port}`))
