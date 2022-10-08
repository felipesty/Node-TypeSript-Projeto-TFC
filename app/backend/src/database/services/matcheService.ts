import Matches from '../models/matches';
import Teams from '../models/teams';

interface ICreate {
  id?: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome: {
    teamName: string;
  };
  teamAway: {
    teamName: string;
  };
}

class MatcheService {
  getAll = async (): Promise<Matches[]> => {
    const result = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return result;
  };

  create = async (params: ICreate): Promise<ICreate> => {
    const { homeTeam, homeTeamGoals, awayTeam, awayTeamGoals, inProgress } = params;
    const create = await Matches.create({
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress,
    });
    return create as unknown as ICreate;
  };

  update = async (id: string): Promise<[number, Matches[]]> => {
    const update = Matches.update({ inProgress: false }, { where: { id } });
    return update;
  };

  updateGoal = async (
    id: string,
    homeTeamGoals: string,
    awayTeamGoals: string,
  ): Promise<[number, Matches[]]> => {
    const update = Matches.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return update;
  };
}

export default MatcheService;

export { ICreate };
