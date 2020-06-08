import { gql } from 'apollo-boost';
const getAuthorsQuery = gql`
    {
        authors {
            id
            name
        }
    }
`

const getBooksQuery = gql`
    {
        books {
            id
            name
            author {
                name
            }
        }
    }
`

export {
    getAuthorsQuery,
    getBooksQuery
}