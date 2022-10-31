import {render, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import HeadComponent from '../'

describe('HeadComponent', () => {
    it('renders not null', async () => {
        render(<HeadComponent siteConfig={{
            title: 'Testing title',
            author: 'Testing author',
            keywords: 'Testing keywords',
            description: 'Testing description'
        }}/>)

        await waitFor(() => {
            expect(document).not.toBeNull();
        });
    })
})