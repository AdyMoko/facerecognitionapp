import React from "react";

const Signin = ({onRouteChange}) => {
    return (
    <article className="br3 ba b--black-10 mv6 w-100 w-50-m w-25-l mw5 shadow-5 center">
        <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                    <div className="mt3">
                        <label className=" db fw6 lh-copy f5" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-light-blue black  w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f5" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-light-blue black  w-100" type="password" name="password"  id="password" />
                    </div>                    
                </fieldset>

                <div className="">
                    <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib" 
                        type="submit" 
                        value="Sign in" 
                        onClick={()=>onRouteChange('home')}/>
                </div>
                <div className="lh-copy mt3">
                    <p 
                        className="link dim black db pointer"
                        onClick={()=>onRouteChange('register')}>
                        Register
                    </p>                    
                </div>
            </div>
        </main>
    </article> 
    )
}

export default Signin;