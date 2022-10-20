import { Request, Response } from 'express';
import LeaderboardService from '../services/leaderboardService';

class LeaderboardController {
  constructor(private leaderboardService = new LeaderboardService()) {}

  homeTeams = async (_req: Request, res: Response) => {
    const result = await this.leaderboardService.homeTeams();
    res.status(200).json(result);
  };

  awayTeams = async (_req: Request, res: Response) => {
    const result = await this.leaderboardService.awayTeams();
    res.status(200).json(result);
  };
}

export default LeaderboardController;
