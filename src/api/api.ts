import axios from 'axios'


export const api = axios.create({
    baseURL:'https://api.pexels.com',
    headers:{
        'Authorization': import.meta.env.VITE_API_KEY
    }
})

export const getImages  = async (search_term ?: string) => {

    console.log(search_term,'getImages search term')

    if (search_term !== '') {
        const res = await api.get(`/v1/search?query=${search_term?.toLowerCase()}`)
        return res.data
    }
        const res = await api.get('/v1/curated?per_page=20')
        return res.data

    // /v1/curated?per_page=15'

}
