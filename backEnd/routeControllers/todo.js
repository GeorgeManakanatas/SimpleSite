var express = require('express'),
    Todo = require('../models/todoModel') // need to be imported from models
    router = express.Router();

// get all the clients (accessed at GET http://localhost:8081/todo/getodos)
router.get('/getodos', function(req, res) {
    Todo.find(function(err, todos) {
        if (err) return console.error(err);
        res.json(todos);
    });
});
// create a todo and return all todos (accessed at POST http://localhost:8081/todo/createTodo)
router.post('/createTodo', function(req, res) {
  var todo = new Clients();      // create a new instance of the Clients model
  // perhaps read these from seperate config file for now?
  todo.text = req.body.text;//req.body.name;
  // save the client and check for errors
  todo.save(function(err,client) {
      if (err) return console.error(err)
      // console.dir(client);
      Todo.find(function(err, todos) {
          if (err)
              res.send(err)
          res.json(todos);
      });
  });
});

// delete todo with this id
// (accessed at DELETE http://localhost:8081/todo/:todo_id)
router.delete('/:todo_id', function(req, res) {
    Todo.remove({
        _id: req.params.todo_id
    }, function(err, client) {
        if (err)
            res.send(err);
        res.json({ message: 'Successfully deleted' });
    });
});
module.exports = router;
