// import apiClient from 'api'
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getImage, getImages } from "./api";
import { useAppSelector } from '../hooks'

export const useFetch = () => {
    const { searchKey } = useAppSelector((state) => state.searchKey)
    const { page } = useAppSelector((state) => state.searchKey)

    const { data, isLoading, isError } = useQuery({
        queryKey: ['data', searchKey, page],
        queryFn: () => getImages(searchKey, page),
        placeholderData: keepPreviousData,
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 5
    })
    return {
        data, isLoading, isError
    }
}

// export const useFetch = () => {
//     const { searchKey } = useAppSelector((state) => state.searchKey)

//     return useInfiniteQuery({
//         queryKey: ['data'],
//         queryFn: () => getImages(),
//         initialPageParam: 0,
//         getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined
//     })
// }

export const useFetchImage = (imageId: string) => {

    const { data, isLoading, isError } = useQuery({
        queryKey: [`image-${imageId}`],
        queryFn: () => getImage(imageId),
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 5
    })
    return { data, isLoading, isError }
}


