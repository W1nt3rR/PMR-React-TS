import React, { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import style from "./layout.module.scss";

interface Props {

}

export const Layout = (props : PropsWithChildren<Props>) => {
    return <>
        <Nav />
        <div className={style.layout}>
            {props.children}
        </div>
        <Footer />
    </>
}