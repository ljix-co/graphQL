import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { getTopicsQuery, addTopicMutation } from "../queries/queries";

const AddTopic = () => {
    const [addTopic, { loading, error, data }] = useMutation(addTopicMutation);
    const [formData, setFormData] = useState({
        name: ''
    });

    const handleOnChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        })
    }

    const handleOnSubmit = () => {
        addTopic({
            variables: formData,
            refetchQueries: [{ query: getTopicsQuery }]
        })
    }

    return (
        <div className='w-screen fixed left-0 top-24 z-20 flex justify-end items-start bg-transparent'>
            <div className='w-1/3 bg-white shadow-md rounded-lg'>
                <form name='topicForm' onSubmit={handleOnSubmit} className='flex flex-col justify-center items-center'>
                    <div className='w-4/5 mt-6'>
                        <label className="block text-sm font-medium text-gray-700">
                            Topic name
                        </label>
                        <input
                            name='name'
                            type='text'
                            value={formData.name}
                            className="w-full h-10 mt-2 rounded-md border-2 border-gray-400 pl-7 pr-12 focus:border-gray-500 focus:ring-gray-500"
                            onChange={event => handleOnChange('name', event.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className="my-6 flex w-4/5 items-center justify-center rounded-md border border-transparent bg-gray-600 py-3 px-8 text-base font-medium text-emerald-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                    >
                        Save topic
                    </button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Oops... something is wrong, we got error</p>}
                {data && <p>New topic <i>{data.addTopic.name}</i> is created!</p>}
            </div>
        </div>
    )
}

export default AddTopic;
