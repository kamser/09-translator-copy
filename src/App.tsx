import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { useReducer } from 'react'
import { initialState, reducer } from './reducer/translatorReducer'

function App() {

  const [state, dispatch] = useReducer(initialState, reducer)

  return (
    <>
      <h1>Best Translator</h1>
    </>
  )
}

export default App
