import React from 'react';
import "../stylesheets/login-signup.css";
import ReactDom from "react-dom";

function LoginForm(props) {

    const signUpClicked = ()=>{
        var accContainer = document.getElementsByClassName("acc-container")[0].classList.add("sign-up-mode");
    }

    const signInClicked = ()=>{
        var accContainer = document.getElementsByClassName("acc-container")[0].classList.remove("sign-up-mode");
    }

    return (
        <>
            <div className="acc-container">
                <div className="forms-container">
                    <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Members Login</h2>
                        <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Phone No" />
                        </div>
                        <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Email" />
                        </div>
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                        </div>
                        <a href="">forgot password </a>
                        <input type="submit" value="Login" className="btn solid" /> 
                    
                
                    </form>


                    <form action="#" className="sign-up-form">

                        <h2 className="title">MemberShip Register</h2>

                        <div className="input-field">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" />
                        </div>

                        <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" />
                        </div>

                        <div className="input-field">
                        <i className="fas fa-envelope"></i>
                        <input type="text" placeholder="Phone No." />
                        </div>

                
                        <div className="input-field">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" />
                        </div>

                        <input type="submit" className="btn" value="Sign up" />
                
                    </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                        ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={signUpClicked}>
                        Sign up
                        </button>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/assets/img/login/log.svg"} className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                        laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={signInClicked}>
                        Sign in
                        </button>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/assets/img/login/register.svg"} className="image" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;