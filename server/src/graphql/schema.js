import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'

const tyDefs = `
    type Query {
        books: [Book]
        book(id: ID!): Book
        author(id: ID!): Author
        authors: [Author]
    }
    type Book{
        id: ID
        name: String!
        genre: String
        author: Author
    }
    type Author  {
        id: ID
        name: String!
        age: Int
        books: [Book]
    }
    type User {
        id: ID
        username: String!
        password: String!
        count: Int
    }
    type Mutation {
        createAuthor(input: AuthorInput): Author
        createBook(input: BookInput): Book
        createUser(input: UserInput): User
        deleteBook(id: ID!): Boolean
        deleteAuthor(id: ID!): Author
        loginUser(input: UserInput): User
    }
    input AuthorInput {
        name: String!
        age: Int
    }
    input BookInput {
        name: String!
        genre: String
        authorId: ID!
    }
    input UserInput {
        username: String!
        password: String!
        token: String
    }
`
export default makeExecutableSchema({
    typeDefs: tyDefs,
    resolvers
})
