import { Snake } from '../models/snake.js'

function newSnake(req, res) {
  res.render('snakes/new', {
    title: 'Add Snake'
  })
}

function create(req, res) {
  Snake.create(req.body)
  .then(snake => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newSnake as new,
  create,
}