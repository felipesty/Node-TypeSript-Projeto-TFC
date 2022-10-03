import Teams from '../models/teams';

class TeamService {
  getAll = async (): Promise<Teams[]> => {
    const result = await Teams.findAll();
    return result;
  };
}

export default TeamService;
