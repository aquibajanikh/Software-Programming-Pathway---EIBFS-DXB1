import MenuComponent from "./MenuComponent";

function LeftMenu(){
    return(<section id="leftMenu">
        <MenuComponent icon="bi bi-credit-card-fill" content="Apply for a card"/>
        <MenuComponent icon="bi bi-arrow-down-up" content="Currency Converter"/>
        <MenuComponent icon="bi bi-box-arrow-right" content="Logout"/>
    </section>);
}

export default LeftMenu;