import { Link } from "react-router-dom";



const Header = () => {
   
    return (
        <div>
            <ul className="">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/phones'>Phones</Link></li>
               
                
            </ul>
            
        </div>
    );
};

export default Header;