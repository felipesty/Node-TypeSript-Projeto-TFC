import { Request, Response } from 'express';
import MatcheService from '../services/matcheService';
import TeamService from '../services/teamsService';
import ICreate from '../Interfaces/ICreate';

class MatcheController {
  constructor(
    private matcheService = new MatcheService(),
    private teamService = new TeamService(),
  ) {}

  getAll = async (_req: Request, res: Response) => {
    const result = await this.matcheService.getAll();
    res.status(200).json(result);
  };

  create = async (req: Request, res: Response) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const create = await this.matcheService.create(
      { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } as ICreate,
    );

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
