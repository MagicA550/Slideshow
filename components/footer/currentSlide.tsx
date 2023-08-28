"use client"

import { useActiveSlide } from "@/utils/hooks"
import { SLIDES } from "@/utils/slides"

/** Displays the current slide index out of the total. */
export const CurrentSlide = () => {
    const activeSlide = useActiveSlide()

    return (
        <p>
            Slide {activeSlide + 1} of {SLIDES.length}
        </p>
    )
}
