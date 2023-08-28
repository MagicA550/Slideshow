"use client"

import styles from "@/styles/show.module.scss"
import { Title } from "./title"
import { Subtitle } from "./subtitle"
import Container from "typedi"
import { SlideService } from "@/services/slide"

interface Props {
    /** The slide's index. */
    index?: number
    /** The slide's title. */
    title?: string
    /** The slide's subtitle. */
    subtitle?: string
    /** Whether the slide is active or not. */
    active?: boolean
    /** Whether this is a preview slide or not. */
    preview?: boolean
    /** Whether this is the primary (major) slide or not. */
    primary?: boolean
}

/** An individual slide. */
export const Slide = (props: Props) => {
    const slideService = Container.get(SlideService)

    return (
        <div
            className={`${styles.slide} ${props.active ? styles.active : ""} ${
                props.primary ? styles.primary : ""
            }`}
            onClick={() => {
                if (!props.primary) slideService.changeSlide(props.index ?? 0)
            }}
        >
            <Title title={props.title} preview={props.preview} />
            <Subtitle subtitle={props.subtitle} preview={props.preview} />

            {props.index !== undefined ? (
                <p className={styles.slideIndex}>{props.index + 1}</p>
            ) : null}
        </div>
    )
}
