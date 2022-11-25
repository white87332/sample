module.exports = {
    moduleNameMapper:
    {
        '\\.(css|scss)$': 'identity-obj-proxy'
    },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};
