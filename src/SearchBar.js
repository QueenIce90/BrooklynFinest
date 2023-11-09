function SearchBar ({setSearchText}) {
    return(
        <div className="search" >
            <label htmlFor="search">Search Activity:</label>
            <h3>Search: </h3>
            <input onChange={(e) => setSearchText(e.target.value)} type="text" id="search" placeholder="type here to search..." />
        </div>
    
    )
}

export default SearchBar;