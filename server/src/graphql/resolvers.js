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
            const { authorId } = input;
            try {
                await author.exists({_id: authorId})
            } catch (error) {
                throw new Error(`AuthorId ${authorId} not exists`)
            }
            const newBook = new book(input)
            newBook.save()
            return newBook
        },
        async deleteBook( _, { id }) {
            try {
                await book.exists({_id: id})
            } catch (error) {
                throw new Error(`BookId ${id} not exist`)
            }
            await book.deleteOne({_id: id})
            return true
        },
        async deleteAuthor( _, { id }) {
            try {
                await author.exists({_id: id})
            } catch (error) {
                throw new Error(`AuthorId ${authorId} not exists`)
            }
            await author.deleteOne({_id: id})
        }
    },
    Book: {
        author: book => author.findById(book.authorId)
    },
    Author: {
        books: author => book.find({ authorId: author.id })
    }
}

