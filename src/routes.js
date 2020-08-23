import { Router } from 'express';
import UserController from './controllers/UsersControllers';
import SessionsControllers from './controllers/SessionsControllers';
import authMiddleware from './middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionsControllers.store);

routes.use(authMiddleware);

routes.get('/authenticated', (req, res) => { return res.send('authenticated!'); });

export default routes;