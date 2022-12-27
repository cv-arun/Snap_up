import React from 'react'

function Table() {
    return (

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            Name
                        </th>
                       
                        <th scope="col" class="py-3 px-6">
                            Price
                        </th>
                        <th scope="col" class="py-3 px-6">
                            weight
                        </th>
                        <th scope="col" class="py-3 px-6">
                            <span class="sr-only">check</span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {[...Array(10)].map((curr,i) => <tr key={i} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Name
                        </th>
                        <td class="py-4 px-6">
                            Price 
                        </td>
                        <td class="py-4 px-6">
                            weight
                        </td>
                        <td class="py-4 px-6 text-center">
                            <input type='checkbox'/>
                        </td>
                    </tr>)}

                </tbody>
            </table>
        </div>

    )
}

export default Table