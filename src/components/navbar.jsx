import { useContext, useState } from "react";
import { UseContext } from "./useContext";
import FetchData from "./fetchData";
import { Link } from "react-router-dom";


const Nabar = ({ items }) => {
    const [classes, setClass] = useState('')
    const  [padding, setPad] = useState('navpage')

    const handleView = () =>
    {
  
            setClass('d-none')
            setPad('navpage p-5 container')
     
    }

    


    return ( 
    
    <div className={padding}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-light p-4 fixed-top">
                <Link className="navbar-brand text-dark" to='/'>CHRONOS SHOP</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"><i className="bi bi-list text-dark"></i></button>


                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ms-auto">
                    {/* <li className="nav-item dropdown">
                            <Link onClick={handleView} className="btn mx-3" to='/Search'>Search</Link>
                        </li> */}
                        <li className="nav-item dropdown">
                            <Link onClick={handleView} className="btn mx-3" to='/View'>View pricing</Link>
                        </li>
                        <li className="nav-item dropdown my-2 mx-5">
                            <label><span className="badge bg-dark">{items}</span> <i className="bi bi-cart"></i></label>
                        </li>


                        <li className="nav-item my-2">
                            <i className="bi bi-person-circle text-secondary"></i>
                        </li>
                    </ul>
                </div>
            </nav>         
        </div>

        
     );
}
 
export default Nabar;