import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { getTopicsQuery } from "../queries/queries";
import noteBook from '../assets/notebook.png'

const ListTopics = () => {
    const { loading, error, data } = useQuery(getTopicsQuery);

    if (error) return null;
    
    return (
        <div className="w-full flex justify-start items-cente gap-72">
            {loading && <h1>Loading...</h1>}
            {data && data.topics.map(topic => (
                <Link key={topic.id} to="/topic">
                    <img src={noteBook} className="absolute w-52"/>
                    <h3 className="absolute mt-20 ml-14">{topic.name}</h3>
                </Link>
            ))}
        </div>
    )
}

export default ListTopics;
