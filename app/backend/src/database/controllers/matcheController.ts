import { Request, Response } from 'express';
import MatcheService, { ICreate } from '../services/matcheService';

class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  getAll = async (_req: Request, res: Response) => {
    const result = await this.matcheService.getAll();
    res.status(200).json(result);
  };

  create = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
    const create = await this.matcheService.create(
      { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } as ICreate,
    );
    res.status(201).json(create);
  };
}

export default MatcheController;
