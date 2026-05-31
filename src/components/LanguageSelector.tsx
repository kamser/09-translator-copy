import { Form } from "react-bootstrap"
import { SUPPORTED_LANGUAGES } from "../constants"
import type { FC } from "react"

interface Props {
    onChange: (language: string) => void
}

export const  LanguageSelector: FC<Props> = ({onChange}) => {
    
    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value
        onChange(selectedOption)
    }
    return(
        <Form.Select aria-label="Select the language" onChange={handleOnChange}>
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