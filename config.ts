export default () => {
    switch (process.env.NODE_ENV) {
        case 'development':
            return {
               PORT: 3001
            }
        case 'production':
            return {
               PORT: 3000
            }
        default:
            return {
                test: 1
            }
            break;
    }
}