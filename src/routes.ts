import { Router } from 'express';

import * as TestController from './controllers/TestController';
const routes = Router();
routes.post('/', TestController.get);

export default routes;