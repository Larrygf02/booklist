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

