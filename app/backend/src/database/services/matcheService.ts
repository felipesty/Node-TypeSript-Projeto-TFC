import Matches from '../models/matches';
import Teams from '../models/teams';

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
}

export default MatcheService;
