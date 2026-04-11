// import React from 'react'
import { useFetch } from "../api/fetch";
import { useAppDispatch, useAppSelector } from "../hooks";
import { set_search_key } from "../slices/search";
import pics from "../../test.json";
import useDebounce from "../hooks/useDebounce";

const Main = () => {
  const { data, isLoading, isError } = useFetch();
  const dispatch = useAppDispatch();

  const { searchKey } = useAppSelector((state) => state.searchKey);

  // const debouncedValue = useDebounce(searchKey,300)

  // console.log(debouncedValue);
  console.log(searchKey)

  console.log(data, isLoading, isError);

  return (
    <>
      <div className="w-full flex items-center justify-center py-12 text-3xl font-bold">
        Image project
      </div>
      <div className="w-full flex items-center justify-center py-12">
        <input
          type="text"
          className="w-2/3 border py-6 px-4 rounded-xl"
          placeholder="search for images..."
          onChange={(e) =>
            setTimeout(() => {
              dispatch(set_search_key(e.target.value));
            }, 3000)
          }
        />
      </div>
      <div className="w-2/3 py-32 mx-auto flex items-start justify-center ">
        {(isError )&&
       <div className="w-full flex items-center justify-center py-6">
        <h1 className="text-2xl font-bold ">Error...</h1>
        </div>} 
      {(isLoading && searchKey  )&&
       <div className="w-full flex items-center justify-center py-6">
        <h1 className="text-2xl font-bold ">Loading...</h1>
        </div>} 

        <div className="columns-2 md:columns-3 gap-4 w-full ">
          {data?.photos.map(
            ({
              id,
              src: { original },
              alt,
            }: {
              id: number;
              src: { original: string };
              alt: string;
            }) => (
              <div key={id}>
                <img
                  className="mb-4 h-auto max-w-full rounded-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                  src={original}
                  alt={alt}
                />
              </div>
            )
          )}
          {/* {pics.map(
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
              <div
                key={id}
              >
                <img
                  className="mb-4 h-auto max-w-full rounded-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                  src={original}
                  alt={alt}
                />
              </div>
            ),
          )} */}
        </div>
      </div>
    </>
  );
};

export default Main;
