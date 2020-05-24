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
    }
    type Author  {
        id: ID
        name: String!
        age: Int
    }
`
export default makeExecutableSchema({
    typeDefs: tyDefs,
    resolvers
})
