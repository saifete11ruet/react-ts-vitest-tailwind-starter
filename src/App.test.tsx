import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
    it('Renders Hello world', () => {
        // ARRANGE
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );
        // ACT
        // EXPECT
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Hello world');
    });

    it('Renders not found if invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
                <App />
            </MemoryRouter>
        );
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Not Found');
    });
});
