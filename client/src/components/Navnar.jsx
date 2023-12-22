import {Link} from "react-router-dom"
const Navbar=()=>{
    return(          <div className='nav'>
    <div className='logo'>BiteBuddy</div>
    <div className='nav-mid'>
      <Link to='#'>Menu</Link>   
      <Link to='#'>Order</Link>   
      <Link to='#'>Foods</Link>   
      <Link to='#'>Service</Link>   
      <Link to='#'>Restaurants</Link>   
    </div>
    <div className='nav-icons'>
    {/* <i class="ri-heart-line"></i>
    <i class="ri-shopping-cart-line"></i> */}
    <i class="ri-login-circle-line"></i>
    <Link to="/register">Register</Link>
    </div>
  </div>
  );
}
export default Navbar;