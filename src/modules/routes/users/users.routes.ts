import { Router } from 'express';
import { CreateUserController } from '../../accounts/useCases/createUser/CreateUserController';
import { ListUserController } from '../../accounts/useCases/listUsers/ListUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', listUserController.handle);

export { usersRoutes };
