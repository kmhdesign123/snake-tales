import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as snakesCtrl from '../controllers/snakes.js'

const router = Router()

// GET ROUTERS
router.get('/', isLoggedIn, snakesCtrl.index)
router.get('/new', isLoggedIn, snakesCtrl.new)
router.get('/:snakeId/edit', isLoggedIn, snakesCtrl.edit)

// POST ROUTERS
router.post('/', isLoggedIn, snakesCtrl.create)
router.post('/:snakeId/edit', isLoggedIn, snakesCtrl.createMeal)

//PUT ROUTERS
router.put('/:snakeId', isLoggedIn, snakesCtrl.update)

// DELETE ROUTERS
router.delete('/:snakeId', isLoggedIn, snakesCtrl.delete)

export { router }