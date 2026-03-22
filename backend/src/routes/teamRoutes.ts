import { Router } from 'express';
import { getAllTeams, getTeamById, searchTeams, simulateMatch } from '../controllers/teamController';
import { addFavorite, editFavorite, deleteFavorite } from '../controllers/favoriteController';
import { isAuthenticated } from '../middlewares/authMiddleware';

const router = Router();

// GET ALL TEAMS:
router.get('/', getAllTeams);

// CRUD:
router.post('/favorites', isAuthenticated, addFavorite);
router.put('/favorites/:teamId', isAuthenticated, editFavorite);
router.get('/search', searchTeams);
router.delete('/favorites/:teamId', isAuthenticated, deleteFavorite);

// SIMULATOR:
router.post('/simulate', isAuthenticated, simulateMatch);

// ID:
router.get('/:id', isAuthenticated, getTeamById);

export default router;