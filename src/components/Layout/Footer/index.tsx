import React from "react";
import style from "./footer.module.scss";

interface Props {

}

export const Footer = (props : Props) => {
    return (
        <div className={style.footer} >

            <div className={style.copyright} >
                <div>© Copyright <strong>Cogflake & Snowheel Company</strong>.</div>
                <div><a href="https://github.com/W1nt3rR">Designed by <strong>W1nt3rR</strong></a></div>
            </div>
        
            <div className="filler" />
            
            <div className={style.buttons} >
                <a className={style.aButton} rel="noreferrer" target="_blank" href="https://twitter.com/W1nt3rR"><img src="images/icons/twitter.svg" alt="" /></a>
                <a className={style.aButton} rel="noreferrer" target="_blank" href="https://t.me/W1nt3rR"><img src="images/icons/telegram.svg" alt="" /></a>
                <a className={style.aButton} rel="noreferrer" target="_blank" href=""><img src="images/icons/facebook.svg" alt="" /></a>
                <a className={style.aButton} rel="noreferrer" target="_blank" href="https://www.instagram.com/w1nt3rr/"><img src="images/icons/instagram.svg" alt="" /></a>
                <a className={style.aButton} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/winterr/"><img src="images/icons/linkedin.svg" alt="" /></a>
            </div>
        
        </div>
    );
}