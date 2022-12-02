import CardDetails from '../components/CardDetails';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { waitFor } from '@testing-library/react';
import React from 'react';


// configure({ adapter: new Adapter() });
describe('Card Details Component', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    const url = 'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json';
    const mAxiosResponse = [{
        name: 'smart',
        featured_media: 'xyz',
        id: 97500,
        type: 'article',
        date: '2020-08-24T15:40:59',
        _embedded: { author: [{ name: "qwersssty" }] },
        _links: {
            about: [{ href: "xyz" }],
            author: [{ href: "qwerty" }]
        },

        category: 'smart'
    }, {
        name: 'not smart',
        featured_media: 'xyz',
        id: 97500,
        type: 'article',
        date: '2020-08-24T15:40:59',
        _embedded: { author: [{ name: "qwersssty" }] },
        _links: {
            about: [{ href: "xyz" }],
            author: [{ href: "qwerty" }]
        },

        category: 'smart'
    }];

    test('check if the api call is made to get the response', async () => {
        jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
        render(<CardDetails />);
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(url);
            expect(axios.get).toHaveBeenCalledTimes(1);
        });
        expect(screen.getByText('...loading')).toBeInTheDocument();
    });
});