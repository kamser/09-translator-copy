import { Form } from "react-bootstrap"
import { SUPPORTED_LANGUAGES } from "../constants"

interface Props {
    onChange: (lnaguage: string) => void
}

export function LanguageSelector({onChange}: Props){
    
    const handleOnChange = (event) => {
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