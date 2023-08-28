import styles from "@/styles/root.module.scss"

/** The header. */
export const Header = () => {
    return (
        <div className={styles.header}>
            <h3>Slideshow Editor</h3>
            <h4>
                magicanthony.dev <More />
            </h4>
        </div>
    )
}

/** The "Expand More" dropdown icon - https://fonts.google.com/. */
const More = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 -960 960 960"
        width="20"
        fill="white"
    >
        <path d="M480-359.923 267.692-572.231 291-595.539l189 189 189-189 23.308 23.308L480-359.923Z" />
    </svg>
)
