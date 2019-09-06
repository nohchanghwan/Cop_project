import axios from 'axios';


// 1. HTTP Request & Reponse와 관련된 기본 설정
// const config = {
//      baseUrl: 'https://test'
// };


//2.API 함수들 정리
function submitInfo(userInfo) {
        return axios.post('/api', userInfo)
}

export {
    submitInfo
}