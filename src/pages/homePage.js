import React from 'react';

import Table from '../components/table';
import Header from '../components/header';
import Button from '../components/button';

function HomePage() {
    return (
        <div className='bg-[#111827] h-screen'>
            <Header />
            <div className='flex flex-wrap'>
                <div className=' mx-auto md:w-1/2 mt-5 '>
                    <div className='max-h-[400px] overflow-y-scroll no-scrollbar'><Table /></div>
                    <div className='text-white flex flex-row-reverse gap-5 py-5'>
                        <Button text={'Reset'} />
                        <Button text={'Submit'} />
                    </div>
                </div>
                <div className='md:w-1/4 w-full bg-[#1f2937] rounded-lg mx-auto mt-5 '>
                    <h1 className='text-center text-white'>Package details</h1>
                    <div className='h-full overflow-y-scroll no-scrollbar p-5 max-h-[480px]'>
                       {[...Array((5))].map((curr,i)=><div className='w-full my-3 bg-[#374151] text-white p-3 rounded-md'>
                            <h1>Package 1</h1>
                            <p>Items: item 1,item2,item3</p>
                            <p>Total price</p>
                            <p>Total weight</p>
                            <p>Total charge</p>
                        </div>)}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage