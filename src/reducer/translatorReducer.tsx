import { AUTO_LANGUAGE } from "../constants"
import type { TranslatorAction, State } from "../types/types"
import { ACTION_TYPE } from "./actionTypes"

export const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
}

export function reducer(state: State, action: TranslatorAction): State{
    const {type} = action
    
    if(type === ACTION_TYPE.INTERCHANGET_LANGUAGES){
        if(state.fromLanguage == AUTO_LANGUAGE) return state
        const loading = state.fromText !== ''
        const result = ''
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage,
            loading,
            result
        }
    }

    else if(type === ACTION_TYPE.SET_FROM_LANGUAGE){
        if(state.fromLanguage === action.payload) return state
        const loading = state.fromText !== ''
        const result = ''
        return {
            ...state,
            fromLanguage: action.payload,
            loading,
            result
        }
    }

    else if(type === ACTION_TYPE.SET_TO_LANGUAGE){
        if(state.toLanguage === action.payload) return state
        const loading = state.fromText !== ''
        const result = ''
        return {
            ...state,
            toLanguage: action.payload,
            loading,
            result
        }
    }

    else if(type === ACTION_TYPE.SET_FROM_TEXT){
        const loading = action.payload !== ''
        return {
            ...state,
            loading: true,
            fromText : action.payload,
            result: ''
        }
    }

    else if(type === ACTION_TYPE.SET_RESULT){
        return {
            ...state,
            loading: false,
            result : action.payload
        }
    }

    return state
}