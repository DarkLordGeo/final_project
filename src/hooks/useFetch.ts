import { useInfiniteQuery } from "@tanstack/react-query"
import { useAppSelector } from "../hooks"
import { getImages } from "../api/api"

export const useFetch = () => {
    const { searchKey } = useAppSelector((state) => state.searchKey)

    const { data, isLoading, fetchNextPage, hasNextPage, isRefetching, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['data', searchKey],
        queryFn: ({ pageParam }) => getImages(pageParam, searchKey),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.page + 1,
        // getPreviousPageParam:(firstPage) => firstPage.next_page
    })
    return {
        data, isLoading, fetchNextPage, hasNextPage, isRefetching, isFetchingNextPage
    }
}
