// import apiClient from 'api'
import { useQuery } from "@tanstack/react-query";
import { getImages } from "./api";
import { useQueryClient } from "@tanstack/react-query";

export const useFetch = () => {
    const {data,isLoading,isError} = useQuery({
        queryKey:['data'],
        queryFn: () => getImages(),
    })
    return {data,isLoading,isError}
}



