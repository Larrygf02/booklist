///dumy data
var books = [
    { name: 'Learn AWS sync ', id: '1'},
    { name: 'Learn golang web', id: '2'},
    { name: 'Learn graphql', id: '3'},
    { name: 'Learn socket.io', id: '4'}
]

export const resolvers = {
    Query: {
        book({ id }) {
            return `Id ${id}`
        },
        books: () => {
            // All books
            return books;
        }
    }
}

