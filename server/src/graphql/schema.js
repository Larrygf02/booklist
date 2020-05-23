import {makeExecutableSchema} from 'graphql-tools'
import { resolvers } from './resolvers'

const tyDefs = `
    type Query {
        books: [Book]
        book(id: String!): String
    }
    type Book{
        id: ID
        name: String!
        genre: String
    }
`
export default makeExecutableSchema({
    typeDefs: tyDefs,
    resolvers
})
