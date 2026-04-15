import { useAppDispatch } from '../hooks';
import { set_search_key } from '../slices/search';

const SearchBar = () => {
    const dispatch = useAppDispatch()
    return (
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
    )
}

export default SearchBar
