import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getBooksQuery = gql`
    {
        books {
            id
            name
        }
    }
`
function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery) 
    if (loading) return <p>Loading..</p>
    if (error) return <p>Error..</p>
    console.log(data)
    return (
        <div>
            <ul id="book-list">
                <li>Book Name</li>
            </ul>
        </div>
    )
}

export default BookList;