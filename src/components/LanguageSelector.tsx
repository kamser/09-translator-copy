import { Form } from "react-bootstrap"
import { SUPPORTED_LANGUAGES } from "../constants"
import type { FC } from "react"
import type { FromLanguage, Language } from "../types/types"

type Props =
    | {type: 'from', value: FromLanguage, onChange: (language: FromLanguage) => void}
    | {type: 'to', value: Language, onChange: (language: Language) => void}

export const  LanguageSelector: FC<Props> = ({type, value, onChange}) => {
    
    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value
        if(type === 'from'){
            onChange(selectedOption as FromLanguage)
        } else {
            onChange(selectedOption as Language)
        }
    }
    return(
        <Form.Select aria-label="Select the language" onChange={handleOnChange} value={value}>
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