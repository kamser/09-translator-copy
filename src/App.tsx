import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'

import { useTranslatorState } from './hooks/useTranslatorState.tsx'
import { AUTO_LANGUAGE } from './constants.ts'
import { ArrowIcon } from './components/icons.tsx'
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType} from './types/types.d.ts'
import { TextArea } from './components/TextArea.tsx'
import { translate } from './services/translate.ts'

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


  useEffect(() => {
    if (fromText === '') return

    translate({ fromLanguage, toLanguage, text: fromText })
      .then(result => {
        if (result == null) return
        setResult(result)
      })
      .catch(() => { setResult('Error') })
  }, [fromText, fromLanguage, toLanguage])

  
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
              onChange={setFromText}
              value={fromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
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
