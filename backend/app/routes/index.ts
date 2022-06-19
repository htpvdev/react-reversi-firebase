import express from 'express'
import { notImplemented } from '../controller/common/ErrorController'
import SampleController from '../controller/common/SampleController'

const router: express.Router = express.Router()

router.post('/', notImplemented)

router.post('/letsgogo', notImplemented)
router.get('/letsgogo', notImplemented)

router.post('/sample', SampleController.test)

export default router