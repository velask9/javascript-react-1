import React from 'react'
import { useState, useRef } from 'react'

import './SentenceBuilder.scss'

export const SentenceBuilder = () => {
    let inputRef = useRef(null)
    let [sentence, setSentence] = useState("")

    const onHandleWord = () => {
        let completeSentence = sentence + " " + inputRef.current.value
        setSentence(completeSentence)
        inputRef.current.value = ""
    }

    const onHandleReset = () => {
        setSentence("")
    }

    return (
        <div>
            <h2>Sentence Builder</h2>
            <div>Sentence: {sentence}</div>
            <input ref={inputRef}></input>
            <button onClick={() => onHandleWord()}>Add Word</button>
            <button onClick={() => onHandleReset()}>Reset</button>
        </div>
    )
}
