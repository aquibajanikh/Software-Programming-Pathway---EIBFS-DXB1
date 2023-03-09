import './IndividualStat.css';

function IndividualStat(props){
    return(
        <div className="individualStat">
            <h2>{props.number}</h2>
            <p>{props.content}</p>
            <p>{props.username}</p>
            <button>See more</button>
        </div>
    )
}

export default IndividualStat;