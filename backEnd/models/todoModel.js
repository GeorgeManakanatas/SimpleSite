var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var todoSchema   = new Schema({
    text: String
    },{ collection: 'todoList' });

// model for using the schema created
var Todo = mongoose.model('todo', todoSchema);
// make this available to applications
module.exports = Todo;
