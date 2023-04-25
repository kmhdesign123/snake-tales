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
    res.redirect('/snakes/new')
  })
}

function show(req, res) {
  Snake.findById(req.params.snakeId)
  .then(snake => {
    res.render('snakes/new', { 
      title: 'Snake Detail', 
      snake: snake,
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  newSnake as new,
  create,
  show,
}