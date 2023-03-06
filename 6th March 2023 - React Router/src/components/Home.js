import { Link } from "react-router-dom";

function Home(){
    return(<nav>
        <Link to='/about'>About Page</Link>
        <Link to='/contact'>Contact Page</Link>
    </nav>);
}

export default Home;

// npm install react-router-dom