interface Props {
    /** The title of the slide. */
    title?: string
    /** Whether this is a preview slide or not. */
    preview?: boolean
}

/** A slide's title. */
export const Title = (props: Props) => {
    const hide = !props.title && props.preview
    const outline = !props.title && !props.preview
    const margin = !props.preview

    return (
        <h1
            style={{
                visibility: hide ? "hidden" : undefined,
                border: outline ? "1px dotted var(--dotted-border)" : undefined,
                marginBottom: margin ? 8 : undefined,
                padding: outline ? "0 92px" : undefined,
            }}
        >
            {props.title ?? "Click to add title"}
        </h1>
    )
}
