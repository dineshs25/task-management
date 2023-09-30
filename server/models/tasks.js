const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userID: String,
    tasks: {
        title: String,
        description: String
    }
})

module.exports = mongoose.model('Tasks', taskSchema)