import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

import { useTranslatorState } from './hooks/useTranslatorState.tsx'

function App() {
  const {fromLanguage, toLanguage, interchangeLanguage, setFromLanguage} = useTranslatorState()
  return (
    <Container fluid>
      <h1>Best Translator</h1>
      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <button onClick={interchangeLanguage}>
            Interchange
          </button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App
