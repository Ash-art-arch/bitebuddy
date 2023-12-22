import Navbar from "../components/Navnar";

const Register =()=>{
    return(
        <div className="register">
            <Navbar/>
            <div className="register-form">
                <form>
                    <h2>Register</h2>
                    <input type="email" placeholder="Enter your email address"/>
                    <input type="text" placeholder="Enter a username"/>
                    <input type="password" placeholder="Password"/>
                    <button>Register</button>
                </form>

            </div>
        </div>
    )
}
export default Register;