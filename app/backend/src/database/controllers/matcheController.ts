import { Request, Response } from 'express';
import MatcheService from '../services/matcheService';

class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  getAll = async (_req: Request, res: Response) => {
    const result = await this.matcheService.getAll();
    res.status(200).json(result);
  };
}

export default MatcheController;
