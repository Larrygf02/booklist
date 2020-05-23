export const resolvers = {
    Query: {
        book({ id }) {
            return `Id ${id}`
        },
        books: () => {
            // All books
            return [];
        }
    }
}

