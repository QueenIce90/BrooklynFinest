import ActivityList from "./ActivityList"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"



function Activities ({brooklyn, setSearchText}){

    const displayList = brooklyn.map(brooklyns => {
        return <ActivityList key= {brooklyns.id} brooklyns={brooklyns}/>
    })

    return <>
    <div className="demo">
    <NavBar/>
    <SearchBar setSearchText={setSearchText}/>
    <h1>Activities You Can Enjoy:</h1>
    <div className="activities-container">
        {displayList}
    </div>
    </div>
    </>
}


export default Activities 