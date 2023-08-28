"use client"

import { SlideService } from "@/services/slide"
import { useActiveSlide } from "@/utils/hooks"
import { SLIDES } from "@/utils/slides"
import { useEffect } from "react"
import Container from "typedi"

/** Listens for dedicated key presses, changing slide as necessary. */
export const KeyListener = () => {
    const slideService = Container.get(SlideService)

    const activeSlide = useActiveSlide()
    const minSlides = 0
    const maxSlides = SLIDES.length - 1

    useEffect(() => {
        window.addEventListener("keydown", keydown)

        return () => {
            window.removeEventListener("keydown", keydown)
        }
    }, [activeSlide])

    const keydown = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown") progress()
        else if (e.key === "ArrowUp") digress()
    }

    const progress = () => {
        if (activeSlide >= maxSlides) return // don't increment too far.
        slideService.changeSlide(activeSlide + 1)
    }

    const digress = () => {
        if (activeSlide <= minSlides) return // don't decrement too far.
        slideService.changeSlide(activeSlide - 1)
    }

    return null
}
