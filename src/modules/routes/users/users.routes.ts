import multer from 'multer';
import uploadConfig from '../../../config/upload';

import { Router } from 'express';
import { CreateUserController } from '../../accounts/useCases/createUser/CreateUserController';
import { ListUserController } from '../../accounts/useCases/listUsers/ListUserController';
import { UpdateUserAvatarController } from '../../accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
// const updateUserAvatarUseCase = new UpdateUserAvatarController();

usersRoutes.post('/', createUserController.handle);
usersRoutes.get('/', listUserController.handle);
// usersRoutes.patch(
//   '/avatar',
//   uploadAvatar.single('avatar'),
//   ensureAuthenticated,
// updateUserAvatarUseCase.handle
// );

export { usersRoutes };
