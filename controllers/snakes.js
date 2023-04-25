import { Snake } from '../models/snake.js'

function newSnake(req, res) {
  Snake.find({})
  .then(snakes => {
    res.render('snakes/new', {
      title: 'Add Snake',
      snakes: snakes
    })
  })
}

function create(req, res) {
  Snake.create(req.body)
  .then(snake => {
    res.redirect('/snakes/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteSnake(req, res) {
  Snake.findByIdAndDelete(req.params.snakeId)
  .then(snake => {
    res.redirect("/snakes/new")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}
function edit(req, res) {
  Snake.findById(req.params.snakeId)
  .then(snake => {
    res.render("snakes/edit", {
      snake: snake,
      title: "Edit Snake"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function update(req, res) {
  Snake.findByIdAndUpdate(req.params.snakeId, req.body, {new: true})
  .then(snake => {
    res.redirect('/snakes/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  newSnake as new,
  create,
  deleteSnake as delete,
  edit,
  update,
}