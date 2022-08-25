import React from "react";
import { Link } from "react-router-dom";
import style from "./nav.module.scss";
import logo from "../../../assets/logo/cogwheel_nice_android.svg";

interface Props {

}

export const Nav = (props : Props) => {
    return (
       <div className={style.nav}>

            <Link to="/" >
                <img className={style.logo} src={logo} alt="slikica" />
            </Link>

            <div className="filler"></div>

            <Link className={style.item} to="/" >Home</Link>
            <Link className={style.item} to="/magisk" >Magisk</Link>
            <Link className={style.item} to="/modules" >Modules</Link>
            <Link className={style.item} to="/gcam" >Gcam</Link>
            <Link className={style.item} to="/contact" >Contact</Link>
            <Link className={style.item} to="/faq" >FAQ</Link>

       </div>
    );
}