import pocketbase from 'pocketbase';
import { ref } from 'vue';
import type { MatchData } from '@/types';

import axios from 'axios';

const pb = new pocketbase('https://trackhuntergame.bessarion.fr');

export const checkUp = ref(pb.authStore.isValid);
export const userData = ref(pb.authStore.model !== null ? pb.authStore.model : { username: '', email: '', password: '', passwordConfirm: '' });

export async function authAccount(email, password) {
    const auth = await pb.collection('users').authWithPassword(email, password);
    const checkUp = ref(pb.authStore.isValid);
    const userData = ref(pb.authStore.model);
    location.reload()
}

export async function createAccount(username, email, password) {
    try {
        await pb.collection('users').create({ username, email, password, passwordConfirm: password });
        const auth = await pb.collection('users').authWithPassword(email, password);
        
        const checkUp = ref(pb.authStore.isValid);
        alert('Account created successfully!');
        window.location.href = "./auth";
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

 

export async function leaveAccount() {
    pb.authStore.clear();
    const checkUp = ref(pb.authStore.isValid);
    location.reload()
}



export async function getAgent(id: string, n: number) {

    try {
        const data = await pb.collection('agents').getFullList(id, { '$autoCancel': false,});
        const request = await axios.get('https://valorant-api.com/v1/agents/' + data[n].agent_id);
        return [request.data.data.displayName, request.data.data.fullPortrait, data[n].win_ratio];
    } catch (error) {
        console.error(error);
    }
}

console.log(await getAgent('dw866jyp9qvhsjr', 0));

export async function getAgents() {
    try {
        const request = await axios.get('https://valorant-api.com/v1/agents');
        return request.data.data;
    }   catch (error) {
        console.error(error);
    }
}

export async function getMaps() {
    try {
        const request = await axios.get('https://valorant-api.com/v1/maps');
        return request.data.data;
    }  catch (error) {
        console.error(error);
    }
}

export async function getRank(id): Promise<string> {
    try {
        const data = await pb.collection('personnal').getOne(id, { '$autoCancel': false,});
        const request = await axios.get('https://valorant-api.com/v1/competitivetiers');
        return [request.data.data[4].tiers[data.rank].largeIcon, request.data.data[4].tiers[data.rank].tierName, request.data.data[4].tiers[data.peak_rank].tierName];
    }  catch (error) {
        console.error(error);
    }
}

export async function getWeapon(id) {
    try {
        const request = await axios.get('https://valorant-api.com/v1/weapons' + id);
        console.log(request.data.data);
    } catch (error) {
        console.error(error);
    }
}

export async function requestPlayer(name) {
    const request = await pb.collection('personnal').getFullList({ filter: 'name = "' + name + '"', '$autoCancel': false, });
    return request[0].id;
    window.location.href = "./auth";
}

export async function getMatches(id) {
    const request = await pb.collection('matches').getFullList({ filter: 'player = "' + id + '"', sort: '-created', '$autoCancel': false, });
    const agents = await axios.get('https://valorant-api.com/v1/agents/')
    const ranks = await axios.get('https://valorant-api.com/v1/competitivetiers/');

    const response = [];

    request.forEach((match, index) => {
        var datafind = agents.data.data.find(agent => agent.uuid === request[index].agent_id);
        var agent = datafind ? datafind.displayIcon : '';

        if (match.rounds_win > match.rounds_loose) {
            var result = '#2BB299';
        } else if (match.rounds_win < match.rounds_loose) {
            var result = '#EA5A5F';
        } else {
            var result = '#EDD189';
        }

        response.push(<MatchData>[agent, match.map, match.rounds_win, match.rounds_loose, match.kills, match.deaths, match.assists, ranks.data.data[4].tiers[request[index].rank].largeIcon, result]);
    });
    return response;
}

export async function getOverview(id) {
    const request = await pb.collection('overview').getFullList({ filter: 'player = "' + id + '"', '$autoCancel': false, });
    return request;
}