import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../graphql/query'

function BookList() {
    const deleteBook = (id) => {
        console.log('Deleted Id', id)
    }
    const { loading, error, data } = useQuery(getBooksQuery) 
    if (loading) return <p>Loading..</p>
    if (error) return <p>Error..</p>
    const { books } = data;
    console.log(books)
    return (
        <div>
            <ul id="book-list">
                {books.map(book => (
                    <li key={book.id}>
                        { book.name } <strong>({book.author.name})</strong> 
                        <button onClick={() => deleteBook(book.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BookList;