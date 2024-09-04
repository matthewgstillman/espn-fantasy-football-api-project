import axios from 'axios';

const BASE_URL = 'https://fantasy.espn.com/apis/v3/games/ffl/seasons/2024/segments/0/leagues/446679';

export const getLeagueData = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching league data:', error);
        throw error;
    }
};
