import {makeExecutableSchema} from 'graphql-tools'
const tyDefs = `
    type Query {
        books: [Book]
    }
    type Book{
        _id: ID
        name: String!
        genre: String!
    }
`
export default makeExecutableSchema({
    typeDefs: tyDefs
})
