"use client"

import { useActiveSlide } from "@/utils/hooks"
import { SLIDES } from "@/utils/slides"
import { cloneElement } from "react"
import styles from "@/styles/show.module.scss"

/** The primary (major) slide. */
export const Primary = () => {
    const activeSlide = useActiveSlide()

    return (
        <div className={styles.primaryContainer}>
            {cloneElement(SLIDES[activeSlide], {
                primary: true,
            })}
        </div>
    )
}
