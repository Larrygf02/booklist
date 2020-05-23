///dumy data
var books = [
    { name: 'Learn AWS sync ', id: '1'},
    { name: 'Learn golang web', id: '2'},
    { name: 'Learn graphql', id: '3'},
    { name: 'Learn socket.io', id: '4'}
]

export const resolvers = {
    Query: {
        book(_, { id }) {
            let _book = books.filter(b => b.id == id)[0]
            return _book
        },
        books: () => {
            // All books
            return books;
        }
    }
}

