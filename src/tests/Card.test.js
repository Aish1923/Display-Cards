import Card from '../components/Card';
import {render, screen } from '@testing-library/react';
import React from 'react';

describe('Card Component', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });
    const mAxiosResponse = {
        data: [{
            name: 'smart',
            featured_media: 'xyz',
            id: 97500,
            type: 'article',
            date: '2020-08-24T15:40:59',
            _embedded: { author: [{ name: "qwerty" }] },
            _links: {
                about: [{ href: "https://title.com/" }],
                author: [{ href: "https://author.com/" }]
            },
            title: {rendered: "Kubernetes"}
        }, {
            name: 'not smart',
            featured_media: 'x89yz',
            id: 97500,
            type: 'post',
            date: '2020-08-24T15:40:59',
            _embedded: { author: [{ name: "qwerty" }] },
            _links: {
                about: [{ href: "xyz" }],
                author: [{ href: "qwerty" }]
            },
            title: {rendered: "Kubernetes"}
        }]
    };

    test('check if the card component is rendered with given properties', async () => {
        render(<Card cardData={mAxiosResponse['data'][0]} />);
        expect(screen.getByText('article')).toBeInTheDocument();
        expect(screen.getByText('qwerty')).toBeInTheDocument();
        expect(screen.getByTestId('card')).toBeInTheDocument();
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', 'xyz');
        expect(logo).toHaveAttribute('alt', 'Content');
        expect(screen.getByText('qwerty').closest('a')).toHaveAttribute('href', 'https://author.com/')
        expect(screen.getByText('Kubernetes').closest('a')).toHaveAttribute('href', 'https://title.com/')
    });

});