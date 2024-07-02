import axios from 'axios'

export const axiosi=axios.create({withCredentials:false,baseURL:process.env.REACT_APP_BASE_URL,headers:process.env.REACT_APP_HEADERS})