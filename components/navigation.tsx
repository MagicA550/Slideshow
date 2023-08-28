import styles from "@/styles/root.module.scss"
import { Panes } from "./navigation/panes"

/** Navigation and page options. */
export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <Panes />
            {/* <Options /> */}
        </div>
    )
}
