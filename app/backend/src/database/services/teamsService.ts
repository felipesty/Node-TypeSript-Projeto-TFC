import Teams from '../models/teams';

class TeamService {
  getAll = async (): Promise<Teams[]> => {
    const result = await Teams.findAll();
    return result;
  };

  getById = async (id: string): Promise<Teams | null> => {
    const result = await Teams.findByPk(id);
    return result;
  };
}

export default TeamService;
