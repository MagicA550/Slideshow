import Link from "next/link"
import { PropsWithChildren } from "react"
import styles from "@/styles/root.module.scss"

interface Props extends PropsWithChildren {
    /** The link we should refer the user to. */
    href: string
}

/** Creates a clickable icon which opens a link in a new tab. */
export const LinkIcon = (props: Props) => {
    return (
        <Link className={styles.linkIcon} href={props.href} target="_blank">
            {props.children}
        </Link>
    )
}
