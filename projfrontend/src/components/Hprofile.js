import React, { useEffect, useState } from 'react';
import { hprofile } from '../auth/helper';
import "./style.css";

const Hprofile=()=>{
    
    const [values, setValues]= useState({
        _id:JSON.parse(localStorage.getItem("jwt")).user._id,
        email:JSON.parse(localStorage.getItem("jwt")).user.email,
        name:"",
        userinfo:[],
        didRedirect:false

    })
    const database=()=>{
      const {_id}=values;
        hprofile({_id}).then(data=>{
          if(data.error)
          console.log(data.err);
          else{
            console.log(data);
              setValues({name:data.username,
              patient:data.patient,
            didRedirect:true})
          }
        })
    }
    
if(!values.didRedirect){
    return(<div>
        <section className="coloured-section" id="title">

<div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light">

    <a className="navbar-brand" href="index.html"><b>Healing Equilibrium</b></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="index.html#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html#doctors">Doctors</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="index.html#faq">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>


</div>
</section>
<section className="white-section" id="update">

<div className="container-fluid coloured-section">
  <h2 className="section-heading">Update File</h2>

  <form id="form-user" action="#" method="post">
    <div className="form-group" data-errormsg="">
      <label>Health Card Number</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>Name</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={values.name} readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>Email</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={values.email} readOnly></textarea>
    </div>
    
    {
        values.userinfo.map((value, index) => {
        return (<div>
          <div className="form-group" data-errormsg="">
      <label>bp</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={value.bp} readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>temp</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={value.temp} readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>allergy</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={value.allergy} readOnly></textarea>
    </div>
        </div>)
      })}
    

  </form>

</div>


</section>
<section className="coloured-section" id="cta">

<div className="container-fluid">

  <h3 className="cta-heading">See if your doctor uses Healing Equilibrium today.</h3>
  <a className="btn btn-dark btn-lg download-btn" href="#update" role="button"><i className="fas fa-user-friends"></i> find your doctor</a>

</div>
</section>


<footer className="white-section" id="footer">

<i className="fab fa-twitter icon-footer"></i>
<i className="fab fa-facebook-f icon-footer"></i>
<i className="fab fa-instagram icon-footer"></i>
<i className="fas fa-envelope icon-footer"></i>

<p>© Copyright 2021 Healing Equilibrium</p>
</footer>
{database()}

    </div>);
}
else{
  return(<div>
    <section className="coloured-section" id="title">

<div className="container-fluid">
  <nav className="navbar navbar-expand-lg navbar-light">

    <a className="navbar-brand" href="index.html"><b>Healing Equilibrium</b></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="index.html#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html#doctors">Doctors</a>
        </li>
       <li className="nav-item">
          <a className="nav-link" href="index.html#faq">FAQ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>


</div>
</section>
<section className="white-section" id="update">

<div className="container-fluid coloured-section">
  <h2 className="section-heading">Update File</h2>

  <form id="form-user" action="#" method="post">
    <div className="form-group" data-errormsg="">
      <label>Health Card Number</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>Name</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={values.name} readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>Email</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={values.email} readOnly></textarea>
    </div>


    {values.userinfo.map((value, index) => {
        return (<div>
          <div className="form-group" data-errormsg="">
      <label>bp</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={value.bp} readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>temp</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={value.temp} readOnly></textarea>
    </div>
    <div className="form-group" data-errormsg="">
      <label>allergy</label>
      <textarea type="text" name="health_num" className="form-control" id="exampleFormControlTextarea1" placeholder="5584-486-674-XX" rows="1" value={value.allergy} readOnly></textarea>
    </div>
        </div>)
      })}

  </form>

</div>


</section>
<section className="coloured-section" id="cta">

<div className="container-fluid">

  <h3 className="cta-heading">See if your doctor uses Healing Equilibrium today.</h3>
  <a className="btn btn-dark btn-lg download-btn" href="#update" role="button"><i className="fas fa-user-friends"></i> find your doctor</a>

</div>
</section>


<footer className="white-section" id="footer">

<i className="fab fa-twitter icon-footer"></i>
<i className="fab fa-facebook-f icon-footer"></i>
<i className="fab fa-instagram icon-footer"></i>
<i className="fas fa-envelope icon-footer"></i>

<p>© Copyright 2021 Healing Equilibrium</p>
</footer>
  </div>)
}
}
export default Hprofile;
