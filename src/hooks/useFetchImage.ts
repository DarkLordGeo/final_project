import { useQuery } from "@tanstack/react-query"
import { getImage } from "../api/api"

export const useFetchImage = (imageId: string) => {

    const { data, isLoading, isError } = useQuery({
        queryKey: [`image-${imageId}`],
        queryFn: () => getImage(imageId),
        gcTime: 1000 * 60 * 10,
        staleTime: 1000 * 60 * 5
    })
    return { data, isLoading, isError }
}