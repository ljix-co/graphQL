import React, {useState} from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    const [bookId, setBookId] = useState(null)

    if (error) return null;

    return (
        <div>
            {loading && (
                <p>Loading...</p>
            )}
            {!loading && !!data && (
                <ul id='book-list'>
                    {data.books.map(book => (
                        <li key={book.id} onClick={() => setBookId(book.id)}>{book.name}</li>
                    ))}
                </ul>
            )}
            {!!bookId && (
                <BookDetails bookId={bookId} />
            )}
        </div>
    );
}

export default BookList;
