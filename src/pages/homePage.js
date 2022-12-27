import React from 'react';

import Table from '../components/table';
import Header from '../components/header';

function HomePage() {
    return (
        <div className='bg-[#111827] h-screen'>
            <Header />
            <div className=' mx-auto w-1/2 mt-5'>
                <Table />
                <div className='text-white'>hello</div>
            </div>
        </div>
    )
}

export default HomePage