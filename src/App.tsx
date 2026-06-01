import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'

import { useTranslatorState } from './hooks/useTranslatorState.tsx'
import { AUTO_LANGUAGE } from './constants.ts'
import { ArrowIcon } from './components/icons.tsx'
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType} from './types/types.d.ts'
import { TextArea } from './components/TextArea.tsx'

function App() {
  const {fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguage,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult} = useTranslatorState()
  return (
    <Container fluid>
      <h2>Best Translator</h2>
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
            type={SectionType.From} 
            onChange={setFromLanguage}
            value={fromLanguage} />

            <TextArea
              type={SectionType.From}
              placeholder='Introducir texto...'
              onChange={setFromText}
              value={fromText}
            />
          </Stack>
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
            <ArrowIcon/>
          </Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.To} 
              onChange={setToLanguage}
              value={toLanguage} />
            <TextArea
              type={SectionType.To}
              loading={loading}
              placeholder='Esperando Texto...'
              onChange={setResult}
              value={result}
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
