import * as express from 'express';
import controller from './controller';

const router = express.Router();

//  se puede poner varias peticiones en una misma ruta
router.route('/').post(controller.create).get(controller.findAll);
router.route('/:id').get(controller.findById).put(controller.update).delete(controller.delete);

export default router;