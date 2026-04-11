import axios from 'axios'

export const api = axios.create({
    // baseURL:'https://api.pexels.com/v1/photos/2014422 ',
    // headers:{
    //     'Authorization': import.meta.env.VITE_API_KEY
    // }
})
export const  getImages  = async () => {
    const res = await api.get('')
    return res.data
}
