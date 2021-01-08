import {Router} from 'express'
import UserController from './controllers/UserController'

const routes = Router()

routes.get('/Users', UserController.index)

export default routes