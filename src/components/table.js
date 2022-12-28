import React from 'react';

import { itemsList } from '../assets/itemsData';


function Table({ setSelected, selected }) {

    const handleSelction = (e, item) => {
        e.target.checked ? setSelected([...selected, item]) : unSelect(item.index)
    }
    const unSelect = (i) => {
        selected = selected?.filter((item) => item.index !== i)
        setSelected(selected)
    }

    return (

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            Name
                        </th>

                        <th scope="col" className="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" className="py-3 px-6">
                            weight
                        </th>
                        <th scope="col" className="py-3 px-6 text-center">
                            select

                        </th>
                    </tr>
                </thead>
                <tbody>

                    {itemsList.map((curr, i) => <tr key={i}

                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {curr.Name}
                        </th>
                        <td className="py-4 px-6">
                            {curr.Price}
                        </td>
                        <td className="py-4 px-6">
                            {curr.Weight}
                        </td>
                        <td className="py-4 px-6 text-center">
                            <input checked={selected.some((v) => v.index === i)} type='checkbox'
                                onChange={(e) => handleSelction(e, { Name: curr.Name, Price: curr.Price, Weight: curr.Weight, index: i })} />
                        </td>
                    </tr>)}

                </tbody>
            </table>
        </div>

    )
}

export default Table