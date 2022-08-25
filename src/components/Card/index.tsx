import React, { PropsWithChildren } from "react";
import style from "./card.module.scss";

interface Props {
    type: string;
    direction?: string;
}

export const Card = (props : PropsWithChildren<Props>) => {

    const { type, direction = "" } = props;

    return <div className={`${style.card} ${style[type]} ${style[direction]}`}>
        {props.children}
    </div>
}