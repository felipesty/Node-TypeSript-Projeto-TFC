import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import MatcheService, { ICreate } from '../services/matcheService';

class MatcheController {
  constructor(private matcheService = new MatcheService()) {}

  getAll = async (_req: Request, res: Response) => {
    const result = await this.matcheService.getAll();
    res.status(200).json(result);
  };

  create = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = req.body;
    const { authorization } = req.headers;

    if (!authorization) throw new Error('Erro token');

    const validationToken = jwt.decode(authorization);

    if (!validationToken) return res.status(401).json({ message: 'Token must be a valid token' });

    const create = await this.matcheService.create(
      { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } as ICreate,
    );

    if (homeTeam === awayTeam) {
      return res.status(401)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    res.status(201).json(create);
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const update = await this.matcheService.update(id);
    if (!update) res.status(400).json({ message: 'erro' });
    res.status(200).json({ message: 'Finished' });
  };

  updateGoal = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const update = await this.matcheService.updateGoal(id, homeTeamGoals, awayTeamGoals);
    res.status(200).json({ update });
  };
}

export default MatcheController;
