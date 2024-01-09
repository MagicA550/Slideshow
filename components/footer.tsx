import styles from "@/styles/root.module.scss"
import { Group } from "./footer/group"
import { GitHub } from "./footer/github"
import { Twitter } from "./footer/twitter"
import { LinkIcon } from "./footer/linkIcon"
import { CurrentSlide } from "./footer/currentSlide"
import { Mastodon } from "./footer/mastodon"

/** The footer. */
export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Group>
                <CurrentSlide />
                <p>English (UK)</p>
            </Group>
            <Group>
                <LinkIcon href="https://github.com/MagicA550">
                    <GitHub />
                </LinkIcon>
                <LinkIcon href="https://twitter.com/MagicA550">
                    <Twitter />
                </LinkIcon>
                <LinkIcon
                    rel="me"
                    href="https://bigrat.social/@anthony"
                >
                    <Mastodon />
                </LinkIcon>
                <p>hello (at) magicanthony.dev</p>
            </Group>
        </footer>
    )
}
