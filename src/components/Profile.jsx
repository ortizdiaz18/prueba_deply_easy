import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import * as profileReducer from "../redux/profile/profileReducer"
import profileStyle from "../styles/Profile.module.css"
export const Profile = () =>{

    const profile = useSelector(state => state.profileReducer.profile)
   
    const {user, isAuthenticated, isLoading} = useAuth0();
    if(isLoading){
        return (
            <div className="containerSpin">
              <div className="spinner"></div>
            </div>
          );
    }else{
        return(
            isAuthenticated &&(
                <div className={profileStyle.globalContainer}>
                    <img className={profileStyle.profileImage} src={profile.picture} alt={user.name}/>
                    <p>{`${profile.name} ${profile.lastname}`}</p>
                </div>
            )
        )
    }
}