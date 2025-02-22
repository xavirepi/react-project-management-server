const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema ({
    title: String,
    description: String,
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;