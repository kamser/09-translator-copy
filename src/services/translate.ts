import {Configuration, OpenAIApi} from 'openai'
import type { FromLanguage, Language } from '../types/types.d.ts'


const apiKey = import.meta.env.OPEN_AI_API_KEY


const configuration = new Configuration({apiKey})
const openai = new OpenAIApi(configuration)

export async function translate({
    fromLanguage,
    language,
    text
}:{
    fromLanguage: FromLanguage,
    language: Language,
    text: string
})