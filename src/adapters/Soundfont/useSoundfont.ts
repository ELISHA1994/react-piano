import { useState, useRef } from "react"
import Soundfont, {InstrumentName, Player} from "soundfont-player"
import {Optional} from "../../domain/types";
import {MidiValue} from "../../domain/note";
import {AudioNodeRegistry} from "../../domain/sound"

interface Settings {
    AudioContext: AudioContextType
}

interface Adapted {
    loading: boolean
    current: Optional<InstrumentName>

    load(instruments?: InstrumentName): Promise<void>
    play(note: MidiValue): Promise<void>
    stop(note: MidiValue): Promise<void>
}

export function useSoundfont({ AudioContext }: Settings): Adapted {
    let activeNodes: AudioNodeRegistry = {}
    const [current, setCurrent,] = useState<Optional<InstrumentName>>(
        null
    )
    const [loading, setLoading] = useState<boolean>(false)
    const [player, setPlayer] = useState<Optional<Player>>(null)
    const audio = useRef(new AudioContext);
}
