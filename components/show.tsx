import styles from "@/styles/show.module.scss"
import { Slides } from "./show/slides"
import { Primary } from "./show/primary"

/** The slideshow. */
export const Show = () => {
    return (
        <div className={styles.show}>
            <Slides />
            <Primary />
        </div>
    )
}
