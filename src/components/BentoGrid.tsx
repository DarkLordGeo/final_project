import { useFetch } from "../api/fetch";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Link } from "react-router";
import useBottomIndicator from "../hooks/useBottomIndicator";
import { useEffect } from "react";
import { next_page } from "../slices/search";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getImage, getImages } from "../api/api";
// import queryString from 'query-string'

const BentoGrid = () => {
    const { divRef, isVisible } = useBottomIndicator()
    // const { data, isLoading, isError } = useFetch()
    const {
        isPending, isError, error, data, isFetching, isPlaceholderData
    } = useFetch()

    const { searchKey } = useAppSelector((state) => state.searchKey);
    const dispatch = useAppDispatch()

    const { page } = useAppSelector((state) => state.searchKey)
    console.log('page: ', page)


    return (
        <>
            {(isError) &&
                <div className="w-full flex items-center justify-center py-6">
                    <h1 className="text-2xl font-bold ">Error...</h1>
                </div>}
            {(isPending && searchKey) &&
                <div className="w-full flex items-center justify-center py-6">
                    <h1 className="text-2xl font-bold text-center">Loading...</h1>
                </div>}

            <div className="w-2/3 py-32 mx-auto flex items-start justify-center flex-col">
                <div className="columns-1 sm:columns-2 md:columns-3 gap-4 w-full ">

                    {/* {data?.pages.map((page) => (
                        <>
                            {page?.photos.map(
                                ({
                                    id,
                                    src: { original },
                                    alt,
                                }: {
                                    id: number;
                                    src: { original: string };
                                    alt: string;
                                }) => (
                                    <Link to={`/${id}`} key={id} >
                                        <div key={id}>
                                            <img

                                                className="mb-4 h-auto max-w-full rounded-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                                                src={original}
                                                alt={alt}
                                            />
                                        </div>
                                    </Link>
                                )
                            )}
                        </>
                    ))}   */}


                    {
                        data?.photos.map(
                            ({
                                id,
                                src: { original },
                                height,
                                alt,
                            }: {
                                id: number;
                                src: { original: string };
                                height: number;
                                alt: string;
                            }) => (
                                <Link to={`/${id}`} >
                                    <div
                                        key={id}
                                    >
                                        <img
                                            className="mb-4 h-auto max-w-full rounded-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                                            src={original}
                                            alt={alt}
                                        />
                                    </div>
                                </Link>
                            ),
                        )}
                </div>


            </div>
            <div ref={divRef} className="w-full flex items-center justify-center font-bold my-16 h-16">
                {/* Loading... */}
                <button className="bg-black text-white  py-2 px-4 rounded-md cursor-pointer hover:shadow-xl hover:mb-2 transition-all " onClick={() => {
                    dispatch(next_page())

                }}
                    disabled={!data?.photos}
                >Load more</button>
            </div>
        </>
    )
}

export default BentoGrid
