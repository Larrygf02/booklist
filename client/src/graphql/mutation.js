import { gql } from 'apollo-boost';
const addBookMutation = gql`
    mutation CreateBook($name: String!, $genre: String, $authorId: ID!){
        createBook(input: {name: $name, genre: $genre, authorId: $authorId}) {
            id
            name
        }
    }
`

export {
    addBookMutation
}