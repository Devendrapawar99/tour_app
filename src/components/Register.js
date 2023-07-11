import "./RegisterStyles.css";
import signupimg from "../assets/signup.png";

function Register() {
    return (
        <div className="Register-container">
            <h1>Sign Up</h1>
            <form action="">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Your Mobile Number" />
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Confirm Your Password" />
                <button type="submit">Register</button>
            </form>

        </div>
    );
}

export default Register;