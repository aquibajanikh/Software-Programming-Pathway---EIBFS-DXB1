import LoginForm from "../components/LoginForm";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function LandingPage(){
    return(
        <>
            <Header/>
            <LoginForm/>
            <Link to='/signup'>sign up </Link>
            <Footer/>
        </>
    );
}

export default LandingPage;