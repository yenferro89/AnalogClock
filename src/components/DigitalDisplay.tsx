import { ReactChild, ReactFragment, ReactPortal } from "react"

export const DigitalDisplay = function(props: { time: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) {
    return <div>{props.time}</div>
}
