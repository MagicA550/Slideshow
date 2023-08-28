"use client"

import { useActiveSlide } from "@/utils/hooks"
import { SLIDES } from "@/utils/slides"
import { cloneElement } from "react"

/** The primary (major) slide. */
export const Primary = () => {
    const activeSlide = useActiveSlide()

    return cloneElement(SLIDES[activeSlide], {
        primary: true,
    })
}
