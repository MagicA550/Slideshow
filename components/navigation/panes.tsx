import styles from "@/styles/root.module.scss"

/** The different available "panes" for navigation. */
export const Panes = () => {
    // TODO navigation bar, when needed.
    return (
        <div className={styles.panes}>
            <p>File</p>
            <p className={styles.active}>Home</p>
        </div>
    )
}
