
import "./search-history.css"

const SearchHistory = () => {
    return (
        <div className='search-dropdown'>
            {["CityName", "CityName", "CityName", "CityName"].map(item =>
                <p>{item}</p>
            )}
        </div>
    )
}

export default SearchHistory
