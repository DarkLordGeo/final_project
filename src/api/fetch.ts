// import apiClient from 'api'
import { useQuery,  useInfiniteQuery } from "@tanstack/react-query";
import { getImage, getImages } from "./api";
import { useAppSelector } from '../hooks'

export const useFetch = () => {
    const {searchKey} = useAppSelector((state) => state.searchKey)

    const {data, isLoading,fetchNextPage,hasNextPage,isRefetching,isFetchingNextPage} = useInfiniteQuery({
      queryKey:['data',searchKey],
      queryFn:({pageParam}) => getImages(pageParam,searchKey),
      initialPageParam:1,
      getNextPageParam: (lastPage) => lastPage.page + 1 ,
      // getPreviousPageParam:(firstPage) => firstPage.next_page
    })
    return {
        data,isLoading,fetchNextPage,hasNextPage,isRefetching,isFetchingNextPage
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


