import "reflect-metadata"

import { Service } from "typedi"

/** The function called when the current slide is changed. */
type SlideCallback = (slide: number) => void

/** Manages the synchronisation of slides across components. */
@Service()
export class SlideService {
    /** The current callback ID, used for unregistering. */
    private currentId = 0

    /** Maps from the callback's ID to the function. */
    private callbacks: Map<number, SlideCallback> = new Map()

    /** Registers the callback given. */
    register = (callback: SlideCallback) => {
        this.callbacks.set(this.currentId, callback)
        this.currentId++

        return this.currentId - 1 // return the previous ID as we cannot increment after returning.
    }

    /** Unregisters the callback with given ID. */
    unregister = (id: number) => this.callbacks.delete(id)

    /** Changes the slide to the given index number, calling all callbacks. */
    changeSlide = (slide: number) =>
        this.callbacks.forEach((callback) => callback(slide))
}
