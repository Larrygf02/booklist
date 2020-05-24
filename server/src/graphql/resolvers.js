///dumy data
var books = [
    { name: 'Learn AWS sync ', id: '1', authorid: '1'},
    { name: 'Learn golang web', id: '2', authorid: '2'},
    { name: 'Learn graphql', id: '3', authorid: '1'},
    { name: 'Learn socket.io', id: '4', authorid: '3'}
]

var authors = [
    { name: 'Raul', age: 23, id: '1'},
    { name: 'Grace', age: 23, id: '2'},
    { name: 'Grecia', age: 23, id: '3'},
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
        },
        author(_, { id }) {
            let _author = authors.filter(a => a.id == id)[0]
            return _author
        },
        authors: () => {
            return authors;
        }
    },
    Book: {
        author: book => authors.filter(a => a.id == book.authorid)[0]
    },
    Author: {
        books: author => books.filter(b => b.authorid == author.id)
    }
}

