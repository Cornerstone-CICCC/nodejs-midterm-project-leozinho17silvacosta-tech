import { Request, Response } from 'express';
import { teams } from '../models/database';

// BROWSE NATIONAL TEAMS:
export const getAllTeams = (req: Request, res: Response) => {
  res.json(teams);
};

// INFORMATIONS NATIONAL TEAMS:
export const getTeamById = (req: Request, res: Response) => {
  const { id } = req.params;
  const team = teams.find(t => t.id === id);

  if (!team) {
    return res.status(404).send("National Team not found.");
  }

  res.json(team);
};

// SEARCH NATIONAL TEAMS:
export const searchTeams = (req: Request, res: Response) => {
  const { q } = req.query;

  if (!q) {
    return res.json(teams);
  }

  const query = q.toString().toLowerCase();
  const filteredTeams = teams.filter(t => 
    t.name.toLowerCase().includes(query)
  );

  res.json(filteredTeams);
};

// SIMULATE MATCH:

export const simulateMatch = (req: Request, res: Response) => {
  const { homeTeamId, awayTeamId, homeScore, awayScore } = req.body;
  const winner = Number(homeScore) > Number(awayScore) ? homeTeamId : awayTeamId;
  
  res.json({ winner });
};

// ADVANCED MATCHES:

import { tournamentProgress } from '../models/database';

export const advanceTeam = (req: Request, res: Response) => {
  const { winnerId, currentPhase } = req.body; 

  if (currentPhase === 'roundOf16') {
    tournamentProgress.quarterFinals.push(winnerId);
  } else if (currentPhase === 'quarterFinals') {
    tournamentProgress.semiFinals.push(winnerId);
  } else if (currentPhase === 'semiFinals') {
    tournamentProgress.final.push(winnerId);
  }

  res.json({ 
    message: "National Team advanced in the bracket!", 
    currentProgress: tournamentProgress 
  });
};