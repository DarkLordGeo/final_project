// import apiClient from 'api'
import { useQuery, keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getImage, getImages } from "./api";
import { useAppSelector } from '../hooks'

export const useFetch = () => {
    const { searchKey } = useAppSelector((state) => state.searchKey)
    const { page } = useAppSelector((state) => state.searchKey)

    const { isPending, isError, error, data, isFetching, isPlaceholderData } = useQuery({
        queryKey: ['data', page],
        queryFn: () => getImages(page),
        // placeholderData: keepPreviousData,
        placeholderData: keepPreviousData,
        // gcTime: 1000 * 60 * 10,
        // staleTime: 1000 * 60 * 5
    })

    return {
        isPending, isError, error, data, isFetching, isPlaceholderData
    }
}




export const useFetchImage = (imageId: string) => {

    const { data, isLoading, isError } = useQuery({
        queryKey: [`image-${imageId}`],
        queryFn: () => getImage(imageId),
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 5
    })
    return { data, isLoading, isError }
}


