"use client"

import styles from "@/styles/show.module.scss"
import { cloneElement } from "react"
import { SLIDES } from "@/utils/slides"
import { useActiveSlide } from "@/utils/hooks"

/** The slide preview panel. */
export const Slides = () => {
    const activeSlide = useActiveSlide()

    return (
        <div className={styles.slides}>
            {SLIDES.map((element, index) => {
                return cloneElement(element, {
                    index: index,
                    preview: true,
                    active: index === activeSlide,
                    key: `slide-${index}`,
                })
            })}
        </div>
    )
}
