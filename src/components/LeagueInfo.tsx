import React, { useEffect, useState } from 'react';
import { getLeagueData } from '../api/espnApi';

interface Team {
  teamLocation: string;
  teamNickname: string;
}

interface LeagueData {
  name: string;
  teams: Team[];
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
        {leagueData.teams && leagueData.teams.length > 0 ? (
          leagueData.teams.map((team, index) => (
            <li key={index}>
              {team.teamLocation} {team.teamNickname}
            </li>
          ))
        ) : (
          <li>No teams available</li>
        )}
      </ul>
    </div>
  );
};

export default LeagueInfo;
