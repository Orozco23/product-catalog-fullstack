import { Router } from 'express';
import { pool } from '../config/database.js';
import { createUser, getUser, login } from '../controllers/user.controller.js';

const router = Router();

router.get('/users/:email', getUser);
router.post('/users', createUser);
router.post('/auth/login', login);

export default router;