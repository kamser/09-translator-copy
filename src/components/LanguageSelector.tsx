import { Form } from "react-bootstrap"
import { SUPPORTED_LANGUAGES, AUTO_LANGUAGE } from '../constants';
import type { FC } from "react"
import { SectionType, type FromLanguage, type Language } from '../types/types.d.ts'

type Props =
    | {type: SectionType.From, value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: SectionType.To, value: Language, onChange: (language: Language) => void}

export const  LanguageSelector: FC<Props> = ({type, value, onChange}) => {
    
    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value
        onChange(selectedOption as Language)
    }
    return(
        <Form.Select aria-label="Select the language" onChange={handleOnChange} value={value}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detectar idioma</option>}
            
            {
                Object.entries(SUPPORTED_LANGUAGES).map( ([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))
            }
        </Form.Select>
    )
}