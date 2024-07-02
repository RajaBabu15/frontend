import axios from 'axios'

export const axiosi=axios.create({withCredentials: false,baseURL:process.env.REACT_APP_BASE_URL,headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }})