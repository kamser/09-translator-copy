import type { SUPPORTED_LANGUAGES } from '../constants.ts';
import { ACTION_TYPE } from '../reducer/actionTypes.ts';

export type Language = keyof typeof SUPPORTED_LANGUAGES

export interface State {
    fromLanguage: string
    toLanguage: string
    fromText: string
    result: string
    loading: boolean
}

export type TranslatorAction = 
    | {type: ACTION_TYPE.INTERCHANGE_LANGUAGES}
    | {type: ACTION_TYPE.SET_FROM_LANGUAGE, payload: string}
    | {type: ACTION_TYPE.SET_TO_LANGUAGE, payload: string}
    | {type: ACTION_TYPE.SET_FROM_TEXT, payload: string}
    | {type: ACTION_TYPE.SET_RESULT, payload: string}