const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    title: String,
    image: String,
    location: String,
    description: String
})

const Logs = mongoose.model('Log', logSchema)

module.exports = Logs;