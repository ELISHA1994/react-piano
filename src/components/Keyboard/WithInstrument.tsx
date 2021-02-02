import React, {FunctionComponent, useEffect} from "react"
import { useAudioContext } from "../AudioContextProvider"
import { useSoundfont } from "../../adapters/Soundfont"
// import { useMount } from "../../utils/useMount"
import { Keyboard } from "./Keyboard"
import "./style.css"
import {useInstrument} from "../../state/Instrument";

export const KeyboardWithInstrument: FunctionComponent = () => {
    const AudioContext = useAudioContext()!
    const { instrument } = useInstrument()
    const { loading, current, play, stop, load } = useSoundfont({ AudioContext })

    useEffect(() => {
        if (!loading && instrument !== current) load(instrument)
    }, [load, loading, current, instrument])

    return <Keyboard loading={loading} play={play} stop={stop} />
}
