import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { useReducer } from 'react'
import { initialState, reducer } from './reducer/translatorReducer'
import { ACTION_TYPE } from './reducer/actionTypes'

function App() {

  const [{
    fromLanguage,
    toLangueage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)

  console.log(fromLanguage)

  return (
    <div className='App'>
      <h1>Best Translator</h1>
      <button
        onClick={() => dispatch({type: ACTION_TYPE.SET_FROM_LANGUAGE, payload: 'es'})}
      >Cambiar a Espa;ol</button>
    </div>
  )
}

export default App
