import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AddTopic from './AddTopic';

const NavigationBar = () => {
const [showAddTopicModal, setShowAddTopicModal] = useState(false);

const toggleAddNewTopic = () => {
    setShowAddTopicModal(!showAddTopicModal)
}

    return (
        <div className='w-screen px-24 pt-8 pb-3 flex justify-between items-center border-b-stone-300 border-b-2'>
            <h3 className='italic font-bold text-indigo-400'>notebook</h3>
            <div className='w-1/6 flex justify-between items-center'>
                <Link to="/">
                    <span className='text-sm font-medium text-gray-700 hover:font-bold'>my notebooks</span>
                </Link>
                <button
                    className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2'
                    onClick={toggleAddNewTopic}
                >
                    add new
                </button>
                {showAddTopicModal && <AddTopic/>}
            </div>
        </div>
    )
}

export default NavigationBar;
