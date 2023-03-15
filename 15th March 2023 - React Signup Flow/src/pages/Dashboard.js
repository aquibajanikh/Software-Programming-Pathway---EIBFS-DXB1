import ApplyCard from "../components/ApplyCard";
import CurrencyConverter from "../components/CurrencyConverter";
import LeftMenu from "../components/LeftMenu";
import UserList from "../components/UserList";
import './Dashboard.css';

function Dashboard(){
    return(<section id="dashboard">
        <LeftMenu/>
        <div>
            <ApplyCard/>
            <CurrencyConverter/>
            <UserList/>
        </div>
        
    </section>);
}

export default Dashboard;