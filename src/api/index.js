import axios from '@/plugins/axios.js'

export function getSite() {
    return axios({
        url: 'site',
        method: 'GET'
    })
}