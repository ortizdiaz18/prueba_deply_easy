import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import * as profileReducer from "../redux/profile/profileReducer";
import profileStyle from "../styles/Profile.module.css";
import { NavBar } from "./NavBar";
import { useState } from "react";
export const Profile = () => {
  const profile = useSelector((state) => state.profileReducer.profile);
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [ventana, setVentana] = useState("pedidos");

  console.log(user);
  if (isLoading) {
    return (
      <div className="containerSpin">
        <div className="spinner"></div>
      </div>
    );
  } else {
    if (user.sub.includes("auth0")) {
      return (
        isAuthenticated && (
          <div className={profileStyle.globalContainer}>
            <div>
              <NavBar />
            </div>
            <div>
              <img
                className={profileStyle.profileImage}
                src={profile.picture}
                alt={user.name}
              />
              <p
                className={profileStyle.userName}
              >{`${profile.name} ${profile.lastname}`}</p>
            </div>
            <div className={profileStyle.containerOptions}>
              <div className={profileStyle.userOptions}>
                <button
                  className={profileStyle.buttons}
                  name="pedidos"
                  onClick={(e) => setVentana(e.name)}
                >
                  Pedidos
                </button>
                <button
                  className={profileStyle.buttons}
                  name="reservas"
                  onClick={(e) => setVentana(e.name)}
                >
                  Reservas
                </button>
                <button
                  className={profileStyle.buttons}
                  name="reseñas"
                  onClick={(e) => setVentana(e.name)}
                >
                  Reseñas
                </button>
                <button
                  className={profileStyle.buttons}
                  name="contraseña"
                  onClick={(e) => setVentana(e.name)}
                >
                  Contraseña
                </button>
              </div>
            </div>
          </div>
        )
      );
    } else {
      return (
        isAuthenticated && (
          <div className={profileStyle.globalContainer}>
            <div>
              <NavBar />
            </div>
            <div>
              <img
                className={profileStyle.profileImage}
                src={profile.picture}
                alt={user.name}
              />
              <p
                className={profileStyle.userName}
              >{`${profile.name} ${profile.lastname}`}</p>
            </div>
            <div className={profileStyle.containerOptions}>
              <div className={profileStyle.userOptions}>
                <button className={profileStyle.buttons} name="pedidos" onClick={(e)=>setVentana(e.name)}>
                  Pedidos
                </button>
                <button className={profileStyle.buttons} name="reservas" onClick={(e)=>setVentana(e.name)}>
                  Reservas
                </button>
                <button className={profileStyle.buttons} name="reseñas" onClick={(e)=>setVentana(e.name)}>
                  Reseñas
                </button>
              </div>
            </div>
          </div>
        )
      );
    }
  }
};
