interface Props {
    /** The subtitle of the slide. */
    subtitle?: string
    /** Whether this is a preview slide or not. */
    preview?: boolean
}

/** A slide's subtitle. */
export const Subtitle = (props: Props) => {
    const hide = !props.subtitle && props.preview
    const outline = !props.subtitle && !props.preview

    return (
        <h2
            style={{
                visibility: hide ? "hidden" : undefined,
                border: outline
                    ? "1px dotted var(--dotted-border)"
                    : "1px dotted transparent",
                padding: outline ? "0 92px" : undefined,
            }}
        >
            {props.subtitle ?? "Click to add subtitle"}
        </h2>
    )
}
