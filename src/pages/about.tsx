import RootLayout from "@/app/layout";
import classes from "./about.module.css";
export default function About() {
    return (
        <RootLayout>
            <div className={classes.main}><p>About</p></div>
        </RootLayout>
    )
}