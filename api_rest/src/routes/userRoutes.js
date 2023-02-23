import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// esses 2 n deveriam existir
// router.post('/', userController.store);
// router.get('/', userController.index);

router.get('/', loginRequired, userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index -> lista todos usuarios -> GET
store/create -> cria um novo usuario -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario ->PATCH ou PUT
*/
