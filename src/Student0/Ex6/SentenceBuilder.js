import React from 'react'
import { useState, useRef } from 'react'

import './SentenceBuilder.scss'

export const SentenceBuilder = () => {
    let inputRef = useRef(null)
    let [counter, setCounter] = useState(0)
    let [sentence, setSentence] = useState("")
    let [disabled, setDisabled] = useState(true)

    const onHandleWord = () => {
        let completeSentence = sentence + " " + inputRef.current.value
        setSentence(completeSentence)
        inputRef.current.value = ""
        setCounter(++counter)
        setDisabled(true)
    }

    const onHandleReset = () => {
        setSentence("")
        setCounter(0)
        setDisabled(true)
        inputRef.current.value = ""
    }

    const onTextChange = () => {
        if (inputRef.current.value.length > 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <div>
            <h2>Sentence Builder</h2>
            <div>Sentence: {sentence}</div>
            <div>Word Counter: {counter}</div>
            <input ref={inputRef} onChange={() => onTextChange()}></input>
            <button onClick={() => onHandleWord()} disabled={disabled}>Add Word</button>
            <button onClick={() => onHandleReset()} disabled={disabled}>Reset</button>
        </div>
    )
}
