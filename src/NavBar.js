

function NavBar() {
    const path = window.location.pathname
    return (
    <nav className= "nav">
         <a href="/" className="site-title">Brooklyn Finest</a>
         <ul>
             <li>
                <a href="/activities">Activities</a>
             </li>
             <li>
             <a href="/location">Location</a>
             </li>
             <li>
             <a href="/about">About</a>
             </li>
    
         </ul>
     </nav>
    )
}

function CustomLink({href,...props}) {
    return (
        <li>
            
        </li>
    )
}




export default NavBar