import apiKey from "./key.json" assert { type: "json" };
import axios from "axios";

export async function getValorantPlayerStats(id) {
    const key = `${apiKey.key}`;
    try {
        const response = await axios.get(`https://api.valorant-api.com/v1/players`, {
            headers: {
                'X-Riot-Token': key
            },
            params: {
                id: id
            }
        });

        return {
            
        };
        } catch (error) {
            console.error(error);
            throw error;
        }
}