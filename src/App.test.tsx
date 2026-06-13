import {test, expect} from 'vitest'
import {render} from '@testing-library/react'
import App from './App'

test('My App works as expected', () => {
    const app = render(<App/>)

    const textareaForm = app.getByPlaceholderText('Type some text')
})