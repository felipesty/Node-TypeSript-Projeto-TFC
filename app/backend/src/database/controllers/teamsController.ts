import { Request, Response } from 'express';
import TeamService from '../services/teamsService';

class TeamController {
  constructor(private teamService = new TeamService()) {}

  getAll = async (_req: Request, res: Response) => {
    const result = await this.teamService.getAll();
    res.status(200).json(result);
  };
}

export default TeamController;
