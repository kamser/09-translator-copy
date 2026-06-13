import {test, expect} from 'vitest'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('My App works as expected', async () => {
    const user = userEvent.setup()
    const app = render(<App/>)

    const textareaForm = app.getByPlaceholderText('Type some text')

    await user.type(textareaForm, 'Hola mundo')
    const result = await app.findByDisplayValue(/Hello world/i, {}, {timeout: 10000})

    expect(result).toBeTruthy()
})