import IndividualStat from "./IndividualStat";
import './Stats.css';

function Stats(){
    return(
        <section id="stats">
            <IndividualStat number="100" content="This is some description of the stat" username="Jenny"/>
            <IndividualStat number="500" content="This is some description of the stat"
             username="Bob"/>
            <IndividualStat number="17" content="This is some description of the stat" username="John"/>
        </section>
    );
}

export default Stats;