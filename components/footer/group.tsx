import { PropsWithChildren } from "react"
import styles from "@/styles/root.module.scss"

/** A grouping of elements within the footer. */
export const Group = (props: PropsWithChildren) => {
    return <div className={styles.group}>{props.children}</div>
}
