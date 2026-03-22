import { Router } from 'express';
import { register, login, logout } from '../controllers/authController';
import { getMyFavorites } from '../controllers/favoriteController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.get('/me/favorites', isAuthenticated, getMyFavorites);

export default router;