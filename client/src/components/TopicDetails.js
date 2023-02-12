import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getTopicQuery } from '../queries/queries';

const TopicDetails = () => {
    const { topicId } = useParams()
    const { loading, error, data } = useQuery(getTopicQuery, {
        variables: { id: topicId }
    })
    let topic = {};
    if (data) topic = data.topic;

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Oops... something is wrong, we got error...</p>}
            {topic && (
                <div>
                    <h1>{topic.name}</h1>
                </div>
            )}
        </div>
    )
}

export default TopicDetails;
