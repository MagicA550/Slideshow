import { SlideService } from "@/services/slide"
import { useEffect, useState } from "react"
import Container from "typedi"

/** Maintains the current active slide index. */
export const useActiveSlide = () => {
    const slideService = Container.get(SlideService)

    const [slide, setSlide] = useState(0)

    useEffect(() => {
        const id = slideService.register(setSlide)

        return () => {
            slideService.unregister(id)
        }
    }, [])

    return slide
}
