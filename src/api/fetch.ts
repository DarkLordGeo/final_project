// import apiClient from 'api'
import { useQuery } from "@tanstack/react-query";
import { getImages } from "./api";


import { useAppSelector } from '../hooks'





export const useFetch = () => {
    const { searchKey } = useAppSelector((state) => state.searchKey)

    const {data,isLoading,isError} = useQuery({
        queryKey:['data',searchKey],
        queryFn: () => getImages(searchKey),
        gcTime:1000 * 60 * 10,
        staleTime:1000 * 60 * 5         
    })
    return {data,isLoading,isError}
}



