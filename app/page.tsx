import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { KeyListener } from "@/components/keyListener"
import { Navigation } from "@/components/navigation"
import { Show } from "@/components/show"
import styles from "@/styles/root.module.scss"

export default function Home() {
    return (
        <main className={styles.main}>
            <KeyListener />
            <Header />
            <Navigation />
            <Show />
            <Footer />
        </main>
    )
}
