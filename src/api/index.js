import axios from '@/plugins/axios.js'

export function getSite() {
    return axios({
        url: 'site',
        method: 'GET'
    })
}

export function getMotto() {
  return axios({
    url: 'https://v1.hitokoto.cn/?c=a',
    method: 'GET'
  })
}