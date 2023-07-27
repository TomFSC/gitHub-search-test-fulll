import "./searchSection.css"

function SearchSection() {
  return (
    <div className="search-section">
            <div className="input">
                <input type="text" placeholder='search for user'/>
            </div>
            <div className="editing">
                <input type="checkbox" />
                <div className="actions">
                    <span>Edit</span>
                    <span>Delete</span>
                </div>
            </div>
        </div>
  )
}

export default SearchSection