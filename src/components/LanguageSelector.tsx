import { Form } from "react-bootstrap"
import { SUPPORTED_LANGUAGES } from "../constants"

export const LanguageSelector({onChange}){
    return(
        <Form.Select aria-label="Select the language">
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