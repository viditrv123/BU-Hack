import React from 'react';
import Hprofile from './Hprofile';
import Dprofile from './Dprofile';
import Pprofile from './Pprofile';
import "./style.css";

const Profile=()=>{

    if(JSON.parse(localStorage.getItem("jwt")).user.role==0)
    {
        return(<div>
        <Pprofile></Pprofile>
        </div>);
    }
    else if(JSON.parse(localStorage.getItem("jwt")).user.role==1)
    {
        return(<div>
        <Dprofile></Dprofile>
        </div>);
    }
    else{
        return(<div>
        <Hprofile></Hprofile>
        </div>);
    }
}
export default Profile;