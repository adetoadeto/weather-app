
import "./search-history.css"

const SearchHistory = () => {
    return (
        <div className='search-dropdown'>
            {[1,2,3,4].map(item =>
                <p key={item}>{item}</p>
            )}
        </div>
    )
}

export default SearchHistory
