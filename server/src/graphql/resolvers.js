import book from '../models/book'
import author from '../models/author'
import User from '../models/user'
import { sign } from 'jsonwebtoken'
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
        },
        async createUser( _, { input }) {
            input.count = 0;
            const newUser = new user(input)
            await newUser.save()
            return newUser;
        },
        async loginUser( _ , { input }, { res }) {
            const { username, password } = input
            const user = User.findOne({ username, password });
            if (!user) {
                console.log('User not exists')
                return null
            }
            const refreshtoken = sign({ userID: user.id, count: user.count }, 'SECRET',
            { expiresIn: '7d'});
            const accesstoken = sign({ userId: user.id }, 'SECRET', 
            { expiresIn: '15min'});
            res.cookie('refresh-token', refreshtoken, { expiresIn: 60*60*24*7 })
            res.cookie('access-token', refreshtoken, { expiresIn: 60*15 })
            return user;
        }
    },
    Book: {
        author: book => author.findById(book.authorId)
    },
    Author: {
        books: author => book.find({ authorId: author.id })
    }
}

