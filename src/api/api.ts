import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.pexels.com',
    headers: {
        'Authorization': import.meta.env.VITE_API_KEY
    }
})

export const getImages = async ( page_number: number, search_term ?: string) => {
    if (search_term !== '') {
        const res = await api.get(`/v1/search?query=${search_term?.toLowerCase()}`)
        return res.data
    }
    const res = await api.get(`/v1/curated?page=${page_number}&per_page=20`)
    return res.data
}



export const getImage = async (imageId: string) => {
    const res = await api.get(`/v1/photos/${imageId}`)
    return res.data
}