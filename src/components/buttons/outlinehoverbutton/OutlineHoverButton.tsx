import { ReactNode } from "react";
import classes from "./OutlineHoverButton.module.css";
export default function OutlineHoverButton(props: { children?: ReactNode }) {
    return (<button className={classes.button}>{props.children}</button>);
}