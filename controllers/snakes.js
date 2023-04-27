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
    res.redirect('/snakes/${snake._id}')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/snakes/new')
  })
}

function index(req, res) {
  Snake.find({})
  .then(snakes => {
    res.render('snakes/index', {
      snakes: snakes,
      title: 'My Snakes'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/snakes/new')
  })
}

function show(req, res) {
  Snake.find({})
  .then(snakes => {
  Snake.findById(req.params.snakeId)
  .then(snake => {
    res.render('snakes/show', { 
      title: 'Snake Details', 
      snake: snake,
      snakes: snakes,
    })    
  })
})
    .catch(err => {
    console.log(err)
    res.redirect("/")
    })
  .catch(err => {
    console.log(err)
    res.redirect("/")
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
  Snake.find({})
  .then(snakes => {
    Snake.findById(req.params.snakeId)
    .then(snake => {
      res.render("snakes/edit", {
        snake: snake,
        title: "Edit Snake",
        snakes: snakes,
      })
    })
  })
    .catch(err => {
    console.log(err)
    res.redirect("/")
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

function createMeal(req, res) {
  console.log('this works!')
  Snake.findById(req.params.snakeId)
  .then(snake => {
    snake.meals.push(req.body)
    snake.save()
    .then(() => {
      res.redirect('/snakes/${snake._id}/edit')
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  newSnake as new,
  create,
  index,
  show,
  deleteSnake as delete,
  edit,
  update,
  createMeal,
}