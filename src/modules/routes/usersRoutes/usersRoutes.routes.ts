import { Router } from 'express';
import { CreateUserController } from '../../accounts/useCases/createUser/CreateUserController';
import { ListUserController } from '../../accounts/useCases/listUsers/ListUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', listUserController.handle);

export { userRoutes };
