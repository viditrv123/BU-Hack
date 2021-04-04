import React, { useState } from 'react';
import "./style.css";
import logo1 from "../assets/logo1.JPG"
import { Redirect } from 'react-router';
import { isAuthenticated, hlogin, authenticate } from '../auth/helper/index';

const Login_Hospital=()=>{
    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email, password, error, loading, didRedirect}=values;
    const {user}=isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error: false,loading: true})
        hlogin({email,password})
            .then(data=>{
                if(data.error)
                setValues({...values,error: data.error,loading: false})
                else{
                    authenticate(data,()=>{
                        setValues({...values,didRedirect:true})
                        console.log(data);
                    })
                }
            })
            .catch(err=>console.log("signin failed"));
    }

    const performRedirect=()=>{
        if(didRedirect)
        {
            if(user&&user.role==4)
            {
                return <p classNameName="text-white text-center">Redirect to admin</p>
            }
            else{
                return <Redirect to="/" />;
            }
        }
        if(isAuthenticated())
        {
            return <Redirect to="/" />
        }

    }
    return(<div>
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div className="container">
      <div className="card login-card">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img src={logo1} alt="login" className="login-card-img" height="400px" width="400px"/>
          </div>
          <div className="col-md-7">
            <div className="card-body">

              <p className="login-card-description">Login</p>
              <form action="#!">

                  <div className="form-group">
                    <label  className="sr-only">Email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Email address" value={email} onChange={handleChange("email")}/>
                  </div>
                  <div className="form-group mb-4">
                    <label  className="sr-only">Password</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={password} onChange={handleChange("password")}/>
                  </div>

                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" onClick={onSubmit}/>
                </form>
                {/* <a href="#!" className="forgot-password-link">Forgot password?</a> */}
                <p className="login-card-footer-text">Don't have an account, register?<a href="/Register" className="text-reset"> Signup here</a></p>
                <nav className="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
    </div>
  </main>
  {performRedirect()}
    </div>);
}
export default Login_Hospital;
