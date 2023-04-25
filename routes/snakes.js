import { Router } from 'express'
import * as snakesCtrl from '../controllers/snakes.js'

const router = Router()

// GET
router.get('/new', snakesCtrl.new)

router.get('/:snakeId/edit', snakesCtrl.edit)

// POST
router.post('/', snakesCtrl.create)

//PUT 
router.put('/:snakeId', snakesCtrl.update)

// DELETE ROUTERS
router.delete('/:snakeId', snakesCtrl.delete)

export { router }