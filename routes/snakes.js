import { Router } from 'express'
import * as snakesCtrl from '../controllers/snakes.js'

const router = Router()

// GET ROUTERS
router.get('/new', snakesCtrl.new)

router.get('/:snakeId/edit', snakesCtrl.edit)

// POST ROUTERS
router.post('/', snakesCtrl.create)
router.post('/:snakeId/edit', snakesCtrl.createMeal)

//PUT ROUTERS
router.put('/:snakeId', snakesCtrl.update)

// DELETE ROUTERS
router.delete('/:snakeId', snakesCtrl.delete)

export { router }