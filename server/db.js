const mongoose = require('mongoose')

require('dotenv').config()

const db = process.env.mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB
