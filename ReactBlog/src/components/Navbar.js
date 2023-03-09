import Logo from './../images/magic-potion.png';
import './Navbar.css';

function Navbar(){
    return(
        <nav>
            <img src= {Logo}/>
            <div>
                <a>Home</a>
                <a>About</a>
                <a>Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;