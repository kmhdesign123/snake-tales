import { Router } from 'express'
import * as snakesCtrl from '../controllers/snakes.js'

const router = Router()

// GET /snakes/new
router.get('/new', snakesCtrl.new)

// POST /snakes/
router.post('/', snakesCtrl.create)

// DELETE ROUTERS
router.delete('/:snakeId', snakesCtrl.delete)

export { router }