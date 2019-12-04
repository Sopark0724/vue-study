import axios from 'axios'

const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

function fetchNewsList() {
    const response = axios.get(`${config.baseUrl}news/1.json`);
    return response;
}

async function fetchAskList() {
    try {
        return axios.get(`${config.baseUrl}ask/1.json`);
    }catch (error) {
        console.log(error);
    }
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskDetail(askId) {
    return axios.get(`${config.baseUrl}item/${askId}.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchAskDetail,
    fetchList
}
