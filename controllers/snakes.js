import { Snake } from '../models/snake.js'

function newSnake(req, res) {
  const profileId = req.user.profile._id
  Snake.find({owner: profileId})
  .then(snakes => {
    console.log(req.user.profile._id, '*****')
    res.render("snakes/new", {
      title: "Add Snake",
      snakes,
    })
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Snake.create(req.body)
  .then(snake => {
    res.redirect(`/snakes/${snake._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect("/snakes/new")
  })
}

function index(req, res) {
  const profileId = req.user.profile._id
  Snake.find({owner: profileId})
  .then(snakes => {
    res.render("snakes/index", {
      snakes: snakes,
      title: 'My Snakes'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/snakes/new")
  })
}

function show(req, res) {
  
  Snake.findById(req.params.snakeId)
  .then(snake => {
    res.render("snakes/show", { 
      title: "Snake Details", 
      snake: snake,
    })    
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
    res.redirect("/snakes/new")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function createMeal(req, res) {
  Snake.findById(req.params.snakeId)
  .then(snake => {
    snake.meals.push(req.body)
    snake.save()
    .then(() => {
      res.redirect(`/snakes/${snake._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deleteMeal(req,res) {
  Snake.findById(req.params.snakeId)
    .then(snake => {
      snake.meals.remove(req.params.mealId)
      snake.save()
      .then(() => {
        res.redirect(`/snakes/${snake._id}`)
      })
      .catch(err => {
        console.log(err)
        res.redirect("/snakes")
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect("/snakes")
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
  deleteMeal,
}