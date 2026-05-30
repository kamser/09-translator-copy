import type { TranslatorAction, State } from "../types/types"
import { ACTION_TYPE } from "./actionTypes"

export const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
}

export function reducer(state: State, action: TranslatorAction){
    const {type} = action
    
    if(type === ACTION_TYPE.INTERCHANGET_LANGUAGES){
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    else if(type === ACTION_TYPE.SET_FROM_LANGUAGE){
        return {
            ...state,
            fromLanguage: action.payload
        }
    }

    else if(type === ACTION_TYPE.SET_TO_LANGUAGE){
        return {
            ...state,
            toLanguage: action.payload
        }
    }

    else if(type === ACTION_TYPE.SET_FROM_TEXT){
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