import { Link, useParams } from 'react-router'
import { useFetchImage } from '../hooks/useFetchImage';

const PicturePage = () => {

  const { id } = useParams()
  const { data, isLoading, isError } = useFetchImage(id!);


  return (
    <div className='w-full flex items-center justify-center py-32 flex-col'>

      {(isError) &&
        <div className="w-full flex items-center justify-center py-6">
          <h1 className="text-2xl font-bold ">Error...</h1>
        </div>}
      {(isLoading) &&
        <div className="w-full flex items-center justify-center py-6">
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        </div>}

      <div className='w-2/3 flex items-center justify-center flex-col mt-15'>
        <div className='w-full flex items-center justify-center'>
          <img
            className='rounded-lg'
            // why this behaves the way it does
            src={data?.src?.large}
          />
        </div>
        <div className='mt-6 text-left flex items-start justify-center text-3xl flex-col gap-4'>
          <p className='font-bold'>Photographer: <span className='font-light'>{data?.photographer}</span></p>
          <p className='font-bold font-xl'>Description: <span className='font-light'>{data?.alt}</span></p>
        </div>
        <div className='w-full flex items-center justify-center'>
          <Link to={`${data?.url}`}
            className='w-1/3 mt-12 bg-black text-white rounded-lg text-center py-6'
          >
            {/* <button className='w-1/3 mt-12 bg-black text-white rounded-lg text-center py-6'>Go to site</button> */}
            Go to site
          </Link>
        </div>
      </div>

    </div>
  )
}

export default PicturePage