import React, {useState } from 'react';


import Table from '../components/table';
import Header from '../components/header';
import Button from '../components/button';
import PackageCard from '../components/packageCard';


function HomePage() {

    const [packages, setPackages] = useState([])
    const [selected, setSelected] = useState([])


    const resetSelection = () => {
        setSelected([])

        setPackages([])
    }

    const packItems = () => {
        let s = {}
        let price = 0
        let c = 0
        let i = 0
        let d = 0
        let e = selected.length - 1
        let arr = selected.sort((a, b) => a.Weight - b.Weight)
        let n = 1
        console.log(arr)
        while (n <= arr.length) {
            if (n % 2 !== 0) {
                i = d++
            } else {
                i = e--
            }
            if (price + arr[i].Price > 250) {
                price = 0
                c++
            }
            price += arr[i].Price
            if (!s[c]) {
                s[c] = []
            }
            s[c].push(arr[i])

            n++
        };
        setPackages(Object.values(s))

    }

    const handleSubmit = (e) => {
        e.target.innerText === 'Place order' && packItems()
        e.target.innerText === 'Reset' && resetSelection()
        console.log(e)
    }


    return (
        <div className='bg-[#111827] h-screen'>
            <Header />
            <div className='flex flex-wrap'>
                <div className=' mx-auto md:w-1/2 mt-5 '>
                    <div className='max-h-[400px] overflow-y-scroll no-scrollbar'>
                        <Table setSelected={setSelected} selected={selected} />
                    </div>
                    <svg className='animate-bounce w-10 h-10 text-white mx-auto' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className='text-white flex flex-row-reverse gap-5 py-2' onClick={handleSubmit}>
                        <Button text={'Reset'} />
                        <Button text={'Place order'} />
                    </div>
                </div>
                {packages?.length && <div className='md:w-1/4 w-full bg-[#1f2937] rounded-lg mx-auto mt-5 '>
                    <h1 className='text-center text-white'>Package details</h1>
                    <div className='h-full overflow-y-scroll no-scrollbar p-5 max-h-[480px]'>
                        {packages?.map((curr, index) => <PackageCard key={index} curr={curr} i={index} />)}
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default HomePage