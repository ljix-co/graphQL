import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../queries/queries';

const AddBook = () => {
    const { loading, data: authors } = useQuery(getAuthorsQuery);
    const [addBook, { loading: loadingMutation, error, data }] = useMutation(addBookMutation);
    const [formState, setFormState] = useState({
        name: '',
        genre: '',
        authorId: null
    })

    const handleOnSubmit = (event) => {
        event.preventDefault()
        addBook({
            variables: {
                name: formState.name,
                genre: formState.genre,
                authorId: formState.authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        })
    }
console.log(loadingMutation, data, error)
    return (
        <form id='add-book' onSubmit={handleOnSubmit}>
            <div className='field'>
                <label>Book name:</label>
                <input type="text" onChange={event => setFormState(prevState => ({
                    ...prevState,
                    name: event.target.value
                }))} />
            </div>
            <div className='field'>
                <label>Genre:</label>
                <input type="text" onChange={event => setFormState(prevState => ({
                    ...prevState,
                    genre: event.target.value
                }))} />
            </div>
            <div className='field'>
                <label>Author:</label>
                <select onChange={event => setFormState(prevState => ({
                    ...prevState,
                    authorId: event.target.value
                }))}>
                    <option>Select author</option>
                    {loading && (
                        <option disabled>Loading...</option>
                    )}
                    {!loading && !!authors && authors.authors.map(author => (
                        <option key={author.id} value={author.id}>{author.name}</option>
                    ))}
                </select>
            </div>
            <button type='submit'>+</button>
        </form>
    );
}

export default AddBook;
