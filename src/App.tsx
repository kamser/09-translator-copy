import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'

import { useTranslatorState } from './hooks/useTranslatorState.tsx'
import { AUTO_LANGUAGE } from './constants.ts'
import { ArrowIcon } from './components/icons.tsx'
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types/types'

function App() {
  const {fromLanguage, toLanguage, interchangeLanguage, setFromLanguage, setToLanguage} = useTranslatorState()
  return (
    <Container fluid>
      <h1>Best Translator</h1>
      <Row>
        <Col>
          <h2>From</h2>
          <LanguageSelector 
            type={SectionType.From} 
            onChange={setFromLanguage}
            value={fromLanguage} />
          {fromLanguage}
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage}>
            <ArrowIcon/>
          </Button>
        </Col>
        <Col>
          <h2>To</h2>
          <LanguageSelector 
            type={SectionType.To} 
            onChange={setToLanguage}
            value={toLanguage} />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
