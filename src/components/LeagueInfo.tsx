import React, { useEffect, useState } from 'react';
import { getLeagueData } from '../api/espnApi';

interface LeagueData {
  name: string;
  teams: any[];
}

const LeagueInfo: React.FC = () => {
  const [leagueData, setLeagueData] = useState<LeagueData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLeagueData();
        console.log(data);
        setLeagueData(data);
      } catch (error) {
        console.error('Error fetching league data:', error);
      }
    };

    fetchData();
  }, []);

  if (!leagueData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{leagueData.name}</h1>
      <ul>
        {leagueData.teams.map((team, index) => (
          <li key={index}>{team.teamLocation} {team.teamNickname}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeagueInfo;
