function MenuComponent(props){
    return(
    <div>
        <i className={props.icon}></i>
        <p>{props.content}</p>
    </div>);
}

export default MenuComponent;