import mediaQuery from "css-mediaquery";

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});


function createMatchMedia(width: number) {
    return (query: string) => ({
        matches: mediaQuery.match(query, {
            width
        }),
        addListener: () => {
        },
        removeListener: () => {
        }
    });
}

export {
    createMatchMedia
}