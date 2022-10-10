import { Request, Response } from 'express';
import TeamService from '../services/teamsService';

class TeamController {
  constructor(private teamService = new TeamService()) {}

  getAll = async (_req: Request, res: Response) => {
    const result = await this.teamService.getAll();
    res.status(200).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.teamService.getById(id);
    if (!result) res.status(404).json({ message: 'There is no team with such id!' });
    res.status(200).json(result);
  };
}

export default TeamController;
