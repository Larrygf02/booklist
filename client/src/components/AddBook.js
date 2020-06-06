import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../graphql/query'
function AddBook() {
    const [name, setName] = useState('')
    const [genre, setGenre] = useState('')
    const [author, setAuthor] = useState('')
    const { loading, error, data } = useQuery(getAuthorsQuery)
    const saveBook = (e) => {
        e.preventDefault();
        console.log({
            name,
            genre,
            author
        })
    }
    if (loading) return <p>Loading..</p>
    if (error) return <p>Error..</p>
    const { authors } = data;
    return (
        <form id="add-book" onSubmit={saveBook}>
            <div className="field">
                <label>Book Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </div>
            <div className="field">
                <label>Genre</label>
                <input type="text" value={genre} onChange={e => setGenre(e.target.value)}></input>
            </div>
            <div className="field">
                <label>Author</label>
                <select value={author} onChange={e => setAuthor(e.target.value)}>
                    <option value={''}>Select Author</option>
                    {authors.map(author => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button>Agregar</button>
        </form>
    )
}

export default AddBook;