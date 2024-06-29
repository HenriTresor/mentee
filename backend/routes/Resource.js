import { getResourcesByCategoryController } from '../controllers/Resource.js'
import { Router } from 'express'

const router = Router()


router.get('/:category', getResourcesByCategoryController)


export default router
