import React from "react";

import "./sign-in.styles.scss";

class SingnIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', paasword:''})
    }

    render() {
        return(
            <div className="sign-in">
                <h2> I already have an account</h2>
                <span>Sign In with your email and password </span>

                <form>
                    <input name='email' type='email' value={this.state.email} required/>
                   <label> Email</label>
                    <input name='paasword' type='paasword' value={this.state.email} required/>
                    <label> Paasword</label>
                </form>
               </div>
        )
    }
}