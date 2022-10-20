import Teams from '../models/teams';
import Matches from '../models/matches';

interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: string,
}

class LeaderboardService {
  homeVictories = (match: any): number => {
    const result = match.filter((ma: any) => ma.homeTeamGoals > ma.awayTeamGoals).length;
    return result;
  };

  draws = (match: any): number => {
    const result = match.filter((ma: any) => ma.homeTeamGoals === ma.awayTeamGoals).length;
    return result;
  };

  homeTotalPoints = (match: any): number => (this.homeVictories(match) * 3) + this.draws(match);

  awayVictories = (match: any): number => {
    const result = match.filter((ma: any) => ma.homeTeamGoals < ma.awayTeamGoals).length;
    return result;
  };

  awayTotalPoint = (match: any): number => (this.awayVictories(match) * 3) + this.draws(match);

  awayGoals = (match: any): number => {
    const result = match.map((ma: any) => ma.awayTeamGoals)
      .reduce((acc: number, goal: number) => acc + goal);
    return result;
  };

  homeGoals = (match: any): number => {
    const result = match.map((ma: any) => ma.homeTeamGoals)
      .reduce((acc: number, goal: number) => acc + goal);
    return result;
  };

  homeBalance = (match: any): number => this.homeGoals(match) - this.awayGoals(match);

  awayBalance = (match: any): number => this.awayGoals(match) - this.homeGoals(match);

  homeEfficiency = (match: any): string => {
    const result = ((this.homeTotalPoints(match) / (match.length * 3)) * 100).toFixed(2);
    return result;
  };

  awayEfficiency = (match: any): string => {
    const result = ((this.awayTotalPoint(match) / (match.length * 3)) * 100).toFixed(2);
    return result;
  };

  sortResult = (match: ILeaderboard[]) => match
    .sort((a, b) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn);

  homeTeams = async (): Promise<ILeaderboard[]> => {
    const getAll = await Teams.findAll();
    const matches = await Promise.all(getAll.map(async (team) => {
      const home = await Matches
        .findAll({ where: { homeTeam: team.id, inProgress: false } });
      return {
        name: team.teamName,
        totalPoints: this.homeTotalPoints(home),
        totalGames: home.length,
        totalVictories: this.homeVictories(home),
        totalDraws: this.draws(home),
        totalLosses: this.awayVictories(home),
        goalsFavor: this.homeGoals(home),
        goalsOwn: this.awayGoals(home),
        goalsBalance: this.homeBalance(home),
        efficiency: this.homeEfficiency(home),
      };
    }));

    return this.sortResult(matches);
  };

  awayTeams = async (): Promise<ILeaderboard[]> => {
    const getAll = await Teams.findAll();
    const matches = await Promise.all(getAll.map(async (team) => {
      const away = await Matches
        .findAll({ where: { awayTeam: team.id, inProgress: false } });
      return {
        name: team.teamName,
        totalPoints: this.awayTotalPoint(away),
        totalGames: away.length,
        totalVictories: this.awayVictories(away),
        totalDraws: this.draws(away),
        totalLosses: this.homeVictories(away),
        goalsFavor: this.awayGoals(away),
        goalsOwn: this.homeGoals(away),
        goalsBalance: this.awayBalance(away),
        efficiency: this.awayEfficiency(away),
      };
    }));

    return this.sortResult(matches);
  };
}

export default LeaderboardService;
