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
import book from '../models/book'
import author from '../models/author'

export const resolvers = {
    Query: {
        book(_, { id }) {
            return book.findById(id)
        },
        books: () => {
            return book.find({})
        },
        author(_, { id }) {
            return author.findById(id)
        },
        authors: () => {
            return author.find({})
        }
    },
    Mutation: {
        async createAuthor( _, {input}) {
            const newAuthor = new author(input)
            await newAuthor.save()
            return newAuthor;
        },
        async createBook( _, { input }) {
            const newBook = new book(input)
            await newBook.save()
            return newBook;   
        }
    },
    Book: {
        author: book => author.findById(book.authorId)
    },
    Author: {
        books: author => book.find({ authorId: author.id })
    }
}

