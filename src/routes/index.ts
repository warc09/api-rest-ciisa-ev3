import { Router } from 'express'
import tokenValidator from '../middlewares/tokenValidator'
import authRoutes from './authRoutes'
import healthRoutes from './healthRoutes'
import taskRoutes from './taskRoutes'

const apiRoutes = Router()

apiRoutes.use('/', healthRoutes)
apiRoutes.use('/tasks', tokenValidator(), taskRoutes)
apiRoutes.use('/auth', authRoutes)

export default apiRoutes