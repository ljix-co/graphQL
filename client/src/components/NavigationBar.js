import React from 'react';
import { Link } from "react-router-dom";

const NavigationBar = () => {
   // const { createNewTopic } = props;

    return (
        <div className='w-screen px-24 pt-8 pb-3 flex justify-between items-center border-b-stone-300 border-b-2'>
            <h3 className='italic font-bold text-indigo-400'>notebook</h3>
            <div className='w-1/6 flex justify-between items-center'>
                <Link to="/">
                    <span className='text-sm font-medium text-gray-700 hover:text-indigo-400'>my notebooks</span>
                </Link>
                <button className='inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                    add new
                </button>
            </div>
        </div>
    )
}

export default NavigationBar;
