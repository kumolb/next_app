import classes from "./OutlineButton.module.css";
import { ReactNode } from "react";
export default function OutlineButton(props: { children: ReactNode }) {
    return (<button className={classes.button}>{props.children}</button>)
}