import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'

import { useTranslatorState } from './hooks/useTranslatorState.tsx'
import { AUTO_LANGUAGE } from './constants.ts'
import { ArrowIcon } from './components/icons.tsx'
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types/types'
import { TextArea } from './components/TextArea.tsx'

function App() {
  const {fromLanguage, toLanguage, interchangeLanguage, setFromLanguage, setToLanguage} = useTranslatorState()
  return (
    <Container fluid>
      <h2>Best Translator</h2>
      <Row>
        <Col>
          <LanguageSelector 
            type={SectionType.From} 
            onChange={setFromLanguage}
            value={fromLanguage} />

          <TextArea/>
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
            <ArrowIcon/>
          </Button>
        </Col>
        <Col>
          <LanguageSelector 
            type={SectionType.To} 
            onChange={setToLanguage}
            value={toLanguage} />
          <TextArea/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
