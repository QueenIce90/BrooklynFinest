import LocationList from "./LocationList"
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import Form from "./Form"

function Location ({brooklyn, setSearchText, handleDelete, setBrooklyn}) {
 const LocationData = brooklyn.map((brooklyns) => {
    return <LocationList key={brooklyns.id} brooklyns={brooklyns} handleDelete={handleDelete} />
 })
    return<> 
    <NavBar/>
    <SearchBar setSearchText={setSearchText} />
    <Form brooklyn={brooklyn} setBrooklyn={setBrooklyn}/>
    <h1>Location</h1>
    {LocationData}
    </>
}



export default Location;