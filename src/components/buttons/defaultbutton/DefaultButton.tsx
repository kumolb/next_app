import classes from "./DefaultButton.module.css";
import type { ReactNode } from "react";
type LayoutProps = { children?: ReactNode };

export default function DefaultButton(props: LayoutProps) {
    return (<button className={classes.button}>{props.children}</button>)
}