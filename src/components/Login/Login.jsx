import React, { Component } from 'react';
import loginIcon from "../../icons/login-icon.svg";
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    handleClick = () => {
        this.setState({ active: !this.state.active })
    };

    handleBlur = () => {
        this.setState({ active: false })
    };

    render() {
        return (
            <div className="cart">
                <button className="icon-btn" onClick={this.handleClick} onBlur={this.handleBlur}>
                    <img src={loginIcon} className="login__icon" alt="" />
                </button>
                <div className={`login__session-container ${this.state.active ? 'active' : ''}`}>
                    <h5>INICIAR SESIÓN</h5>
                    <h5>CREAR CUENTA</h5>
                </div>
            </div>

        );
    }
}

export default Login;