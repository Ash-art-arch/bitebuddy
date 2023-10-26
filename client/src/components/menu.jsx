import Card from "./card";
const Menu=()=>{
    return(
        <div className="menu">
          <h1>Our Popular Menu</h1>
          <p className="menu-line">Delight Your Palate: Explore a Selection of Exquisite and Sought-After Delicacies from Our Popular Menu, Crafted for Every Taste.</p>
          <div className="filters">
          <button className="active">All</button>
          <button>Breakfast</button>
          <button>lunch</button>
          <button>dinner</button>
          <button>beverages</button>
          <button>desserts</button>
          </div>
          <hr  color="white"/>
          <div className="menu-grid">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>

          </div>
          <div className="cta">
            <button>Explore all Menu</button>
          </div>
        </div>

    );
}
export default Menu;