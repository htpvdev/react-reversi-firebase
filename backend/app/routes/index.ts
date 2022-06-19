import express from 'express'
import { notImplemented } from '../controller/common/ErrorController'

const router: express.Router = express.Router()

router.post('/', notImplemented)

router.post('/letsgogo', notImplemented)
router.get('/letsgogo', notImplemented)

export default router