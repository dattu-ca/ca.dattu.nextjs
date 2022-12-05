module.exports = {
    collectCoverage: true,
    // on node 14.x coverage provider v8 offers good speed and more or less good report
    coverageProvider: 'v8',
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!<rootDir>/out/**',
        '!<rootDir>/.next/**',
        '!<rootDir>/*.config.js',
        '!<rootDir>/coverage/**',
        '!<rootDir>/*.js',
        '!<rootDir>/_backup/**',
        // '!<rootDir>/src/components/index.ts',
        // '!<rootDir>/src/styles/**',
        // '!<rootDir>/pages/**',
        '!<rootDir>/src/utils/tests/**',
    ],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

        // Handle CSS imports (without CSS modules)
        '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

        // Handle module aliases
        '^~/(.*)$': '<rootDir>/src/$1',
        '^~pages/(.*)$': '<rootDir>/pages/$1',
        '^~gqlConfig': '<rootDir>/src/services/graphql/graphql.config.ts',
        '^~gqlContentful': '<rootDir>/src/services/graphql/contentful.graphql.ts',
    },
    // Add more setup options before each test is run
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/_backup/'],
    testEnvironment: 'jsdom',
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {presets: ['next/babel']}],
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],
}
