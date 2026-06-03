import type { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants.ts';
import { ACTION_TYPE } from '../reducer/actionTypes.tsx';

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
    fromLanguage: FromLanguage
    toLanguage: Language
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


export enum SectionType{
    From = 'from',
    To = 'to'
}