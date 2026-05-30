import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useTranslatorState } from './hooks/useTranslatorState.tsx'

function App() {
  const {setFromLanguage} = useTranslatorState()
  return (
    <div className='App'>
      <h1>Best Translator</h1>
      <button
        onClick={() => setFromLanguage('es')}
      >Cambiar a Espa;ol</button>
    </div>
  )
}

export default App
