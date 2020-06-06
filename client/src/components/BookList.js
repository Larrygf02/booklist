import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../graphql/query'

function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery) 
    if (loading) return <p>Loading..</p>
    if (error) return <p>Error..</p>
    const { books } = data;
    return (
        <div>
            <ul id="book-list">
                {books.map(book => (
                    <li key={book.id}>{ book.name }</li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;