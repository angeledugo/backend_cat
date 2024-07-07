import { Router } from 'express';
import { loginHandler, registerHandler } from '../controllers/user.controller';

const router = Router();

router.get('/login', loginHandler);
router.post('/register', registerHandler);

export default router;