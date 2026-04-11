// import React from 'react'
import { useFetch } from "../api/fetch";
import { useAppDispatch, useAppSelector } from "../hooks";
import { set_search_key } from "../slices/search";

const Main = () => {
  const { data, isLoading, isError } = useFetch();

//   const {set_search_key} = 
    const dispatch = useAppDispatch()

    const search_key = useAppSelector((state) => state.searchKey)

    console.log('search key', search_key)

//   console.log(data);
//   console.log(import.meta.env.VITE_API_KEY);
 
  return (
    <>
      <div className="w-full flex items-center justify-center py-12 text-3xl font-bold">Image project</div>
      <div className="w-full flex items-center justify-center py-12">
        <input type="text" className="w-2/3 border py-6 px-4 rounded-xl" placeholder="search for images..."
        onChange={(e) => dispatch(set_search_key(e.target.value))}
        />
      </div>
      <div className="w-full py-32 px-32">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
