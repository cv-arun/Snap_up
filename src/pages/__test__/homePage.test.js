import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import HomePage from '../homePage';

describe("testing home page", () => {
    test('Rendering of two buttons', async () => {
        render(<HomePage />)
        const buttons = await screen.findAllByRole('button');
        expect(buttons).toHaveLength(2)
    })
    test('Rendering table', async () => {
        render(<HomePage />)
        const table = await screen.findByRole('table');
        expect(table).toBeInTheDocument()
    })
 
})