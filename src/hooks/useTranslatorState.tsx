import { useReducer } from 'react'
import { initialState, reducer } from '../reducer/translatorReducer.tsx'

export function useTranslatorState(){
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }
}
 