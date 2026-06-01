import { Form } from "react-bootstrap";

import { SectionType} from '../types/types.d.ts'
import type React from "react";

interface Props {
    type: SectionType
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = {border: 0, height: '200px'}

const getPlaceholder = ({type, loading}: {type: SectionType, loading?: boolean}):string => {
    if(type === SectionType.From) return 'Type some text'
    if(loading) return "Loading..."
    return "Translate"
}

export function TextArea({type, loading, value, onChange}: Props){

    const styles = type === SectionType.From
                    ? commonStyles
                    : {...commonStyles, backgroundColor: '#f5f5f5'}

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
    }
    
    return(
        <Form.Control
            autoFocus={type === SectionType.From}
            as='textarea'
            placeholder={getPlaceholder({type, loading})}
            style={styles}
            value={value}
            onChange={handleChange}
        >

        </Form.Control>
    )
}