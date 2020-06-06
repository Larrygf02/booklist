import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
        }
    }
`

function AddBook() {
    const { loading, error, data } = useQuery(getAuthorsQuery) 
    if (loading) return <p>Loading..</p>
    if (error) return <p>Error..</p>
    const { authors } = data;
    return (
        <form id="add-book">
            <div className="field">
                <label>Book Name</label>
                <input type="text"></input>
            </div>
            <div className="field">
                <label>Genre</label>
                <input type="text"></input>
            </div>
            <div className="field">
                <label>Author</label>
                <select>
                    <option>Select Author</option>
                    {authors.map(author => (
                        <option key={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button>Agregar</button>
        </form>
    )
}

export default AddBook;