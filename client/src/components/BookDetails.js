import React from 'react';
import { useQuery } from '@apollo/client';
import { getBook } from '../queries/queries';

const BookDetails = (props) => {
    const { loading, error, data } = useQuery(getBook, {
        variables: {id: props.bookId}
    });

    return (
        <div>
            {loading && !error && (<h2>Loading...</h2>)}
            {!loading && !!data.book && (
                <>
                    <h3>{data.book.name}</h3>
                    <h4>{data.book.genre}</h4>
                    <h4>{data.book.author.name}, {data.book.author.age}</h4>
                </>
            )}
        </div>
    );
}

export default BookDetails;