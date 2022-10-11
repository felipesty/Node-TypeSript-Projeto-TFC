import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import TeamService from '../services/teamsService';

class MatcheValidation {
  constructor(private teamService = new TeamService()) {}

  validation = async (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;
    const { authorization } = req.headers;

    if (!authorization) throw new Error('Erro token');
    const validationToken = jwt.decode(authorization);

    if (!validationToken) {
      return res.status(401).send({ message: 'Token must be a valid token' });
    }

    const teamHome = await this.teamService.getById(homeTeam);
    const teamAway = await this.teamService.getById(awayTeam);
    if (!teamHome || !teamAway) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    if (homeTeam === awayTeam) {
      return res.status(401)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    next();
  };
}

export default MatcheValidation;
