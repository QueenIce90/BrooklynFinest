
// import NavBar from "./NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Activities from "./Activities";
import About from "./About";
import Location from "./Location";
import Home from "./Home";
import { useState, useEffect } from "react";
import ErrorPage from "./ErrorPage";
// import SearchBar from "./SearchBar";
// import Form from "./Form";


function App() {

  const [brooklyn, setBrooklyn] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch("http://localhost:8880/Brooklyn")
    .then(response => response.json())
    .then(brooklynData => {
      setBrooklyn(brooklynData)
    })

  },[])

  const filterActivities = brooklyn.filter(brooklyns => {
    return brooklyns.activites.toUpperCase().includes(searchText.toUpperCase())
  })

  const filterLocations = brooklyn.filter(brooklyns => {
    return brooklyns.location.toUpperCase().includes(searchText.toUpperCase()) || brooklyns.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function handleDelete(id) {
    setBrooklyn(brooklyn.filter(brooklyns => {
      return brooklyns.id !== id 
    }));
    fetch(`http://localhost:8880/Brooklyn/${id}`, {
      method: "DELETE"
    })
  }

 // Routing 
const routes = [
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/location",
    element: <>
    <Location brooklyn={filterLocations} setSearchText={setSearchText} handleDelete={handleDelete} setBrooklyn={setBrooklyn}/>
    </>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/activities",
    element: <Activities brooklyn={filterActivities} setSearchText={setSearchText}/>,
    errorElement: <ErrorPage/>
  },

]

const router = createBrowserRouter(routes)
  return (
    <>
    <div className="container">,
    <RouterProvider router={router}/>

    
    </div>
    
    </>
  )
  
    
  
}

export default App;

