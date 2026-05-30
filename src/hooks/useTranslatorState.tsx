import { useReducer } from 'react'
import { initialState, reducer } from '../reducer/translatorReducer.tsx'
import { ACTION_TYPE } from '../reducer/actionTypes'
import type { FromLanguage } from '../types/types'

export function useTranslatorState(){
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguage = (): void =>{
        dispatch({type: ACTION_TYPE.INTERCHANGET_LANGUAGES})
    }

    const setFromLanguage = (selectedLanguage: FromLanguage): void =>{
        dispatch({type: ACTION_TYPE.SET_FROM_LANGUAGE, payload: selectedLanguage})
    }

    const setToLanguage = (targetlanguage: string): void =>{
        dispatch({type: ACTION_TYPE.SET_TO_LANGUAGE, payload: targetlanguage})
    }

    const setFromText = (inputText: string): void =>{
        dispatch({type: ACTION_TYPE.SET_FROM_TEXT, payload: inputText})
    }

    const setResult = (result: string): void =>{
        dispatch({type: ACTION_TYPE.SET_RESULT, payload: result})
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguage,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult
    }
}
 