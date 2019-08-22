import axios from 'axios';


// 1. HTTP Request & Reponse와 관련된 기본 설정

// const config = {
//      baseUrl: 'https://api.hnpwa.com/v0/'
// };


//2.API 함수들 정리

// function fetchNewsList() {
//     // return axios.get(config.baseUrl + 'news/1.json');
//     return axios.get(`${config.baseUrl}news/1.json`);
// }

// function fetchAskList() {
//     return axios.get(`${config.baseUrl}ask/1.json`);
// }

function submitInfo() {
    return axios.post('http://localhost:4000')
}

export {
    // fetchNewsList,
    // fetchAskList
    submitInfo
}