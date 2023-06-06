export interface MatchData {
    agent: string;
    map: string;
    roundswin: number;
    roundsloose: number;
    kills: number;
    deaths: number;
    assists: number;
    rank: string;
    result: string;
  }

  export interface RankPlayer {
    image: string;
    rank: string;
    peak: string;
  }

  export interface AgentPlayer {
    name: string;
    image: string;
    win_ratio: number;
  }