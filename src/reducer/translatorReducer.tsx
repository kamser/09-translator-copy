import { ACTION_TYPE } from "./actionTypes"
export const initialState = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading: false
}

export function reducer(state, action){
    const {type} = action
    
    if(type === ACTION_TYPE.INTERCHANGET_LANGUAGES){
        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if(type === ACTION_TYPE.SET_FROM_LANGUAGE){
        return {
            ...state,
            fromLanguage: action.payload
        }
    }

    if(type === ACTION_TYPE.SET_TO_LANGUAGE){
        return {
            ...state,
            toLanguage: action.payload
        }
    }

    if(type === ACTION_TYPE.SET_FROM_TEXT){
        return {
            ...state,
            loading: true,
            fromText : action.payload,
            result: ''
        }
    }

    if(type === ACTION_TYPE.SET_RESULT){
        return {
            ...state,
            loading: false,
            result : action.payload
        }
    }

    return state
}