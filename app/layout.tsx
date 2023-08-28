import "@/styles/globals.scss"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] })

export const metadata: Metadata = {
    title: "Anthony (Magic)",
    description: "Find out more about Anthony's projects on his homepage.",
    icons: "/icon.png",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    )
}
