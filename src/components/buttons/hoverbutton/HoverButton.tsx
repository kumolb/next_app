import { ReactNode } from "react";
import classes from "./HoverButton.module.css";
export default function HoverButton(props: { children?: ReactNode }) {
    return (<button className={classes.button}>{props.children}</button>);
}