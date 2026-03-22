import { Request, Response } from 'express';
import { teams, users } from '../models/database';

// ADD FAVORITE:
export const addFavorite = (req: Request, res: Response) => {
  const { teamId, comment, rating, expectedPoints } = req.body;
  const userId = req.session?.userId;

  const user = users.find(u => u.id === userId);
  if (!user) return res.status(401).json({ message: "User is not logged in." });

  const teamExists = teams.find(t => t.id === teamId);
  if (!teamExists) return res.status(404).json({ message: "National Team not found." });

  const alreadyFavorite = user.favorites.some(f => f.teamId === teamId);
  if (alreadyFavorite) return res.status(400).json({ message: "This National Team is already in your favorites!" });

  const newFavorite = { teamId, comment, rating, expectedPoints };
  user.favorites.push(newFavorite);

  return res.status(201).json({ 
    message: "Added National Team!", 
    favorites: user.favorites 
  });
};

// EDIT FAVORITE:
export const editFavorite = (req: Request, res: Response) => {
  const { teamId } = req.params;
  const { comment, rating, expectedPoints } = req.body;
  const user = users.find(u => u.id === req.session?.userId);

  if (!user) return res.status(401).send("Unauthorized.");

  const fav = user.favorites.find(f => f.teamId === teamId);
  if (!fav) return res.status(404).send("Favorite not found.");

  if (comment !== undefined) fav.comment = comment;
  if (rating !== undefined) fav.rating = rating;
  if (expectedPoints !== undefined) fav.expectedPoints = expectedPoints;

  return res.json({ message: "Updated successfully!", fav });
};

// DELETE FAVORITE:
export const deleteFavorite = (req: Request, res: Response) => {
  const { teamId } = req.params;
  const user = users.find(u => u.id === req.session?.userId);

  if (!user) return res.status(401).send("Unauthorized");

  user.favorites = user.favorites.filter(f => f.teamId !== teamId);
  return res.json({ message: "Favorite National Team removed" });
};

// GET FAVORITE:
export const getMyFavorites = (req: Request, res: Response) => {
  const user = users.find(u => u.id === req.session?.userId);

  if (!user) return res.status(401).json({ message: "Session expired." });

  const detailedFavorites = user.favorites.map(fav => {
    const teamInfo = teams.find(t => t.id === fav.teamId);
    return { 
      ...fav, 
      teamName: teamInfo?.name || "Unknown", 
      group: teamInfo?.group,
      starPlayer: teamInfo?.starPlayer
    };
  });

  return res.json(detailedFavorites);
};