import axios from "axios";

const request = axios.create({
    baseURL: 'http://123.249.120.69:8090',
    timeout: 10000,
})

// 请求拦截
request.interceptors.request.use(
    config => {
        return config
    }
)

// 响应拦截
request.interceptors.response.use(
    config => {
        return config.data
    }
)


export default request