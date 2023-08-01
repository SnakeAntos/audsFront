import { ButtonMusicaYa } from "../../components/Common/Button/buttonMusicaYa";
import "./styles.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Home1 = () => {

  const {user} = useAuth()
  const navigate = useNavigate()


  useEffect(() => {
    console.log(user);
    (user == null) && navigate("/");
  }, [])
  

  return (
    <div className="musicaya-container">
      <div className="musicaya-nav">
        <div className="musicaya-title-nav">
          <h2 className="musicaya-title"> Música ya</h2>
        </div>
        <div className="musicaya-icons">
          <img
            className="icono1-musicaya"
            src="../../../public/images/history.svg"
          ></img>
          <img
            className="icono2-musicaya"
            src="../../../public/images/bell.png"
          ></img>
        </div>
      </div>
      <div className="musicaya-main">
        <div className="musicaya-btn1">
          <div className="button-musicaYa1">
            <img
              className="photo-my1"
              src="../../../public/images/musicaYa1.png"
            ></img>
          </div>
          <div className="cupido-text">
            <h3 className="title-cupido">Cupido Musical</h3>
            <p className="text-cupido">
              Tus artistas favoritos nunca van a dejarte con el corazon roto.
            </p>
          </div>
          <div>
            <ButtonMusicaYa className="button-transparent"></ButtonMusicaYa>
          </div>
        </div>
        <div className="musicaya-btn1">
          <div className="button-musicaYa1">
            <img
              className="photo-my1"
              src="../../../public/images/musicaYa2.png"
            ></img>
          </div>
          <div className="cupido-text">
            <h3 className="title-cupido">Musica Contextual</h3>
            <p className="text-cupido">
              Creamos la playlist perfecta para cualquier situacion.
            </p>
          </div>
          <div>
            <ButtonMusicaYa className="button-transparent"></ButtonMusicaYa>
          </div>
        </div>
      </div>

      <NavBar className="home-navbar"/>

    </div>
  );
};
