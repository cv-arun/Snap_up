import React,{useState} from 'react'

function PackageCard({ curr, i }) {
    const [data,setData]=useState()
    const calcParcelCharge = (weight = 500) => {
        console.log(weight)
        if (weight < 200)
            return 5
        if (weight < 500)
            return 10
        if (weight < 1000)
            return 15
        if (weight < 5000)
            return 20
    }
    let details = {}
    details = curr?.reduce((acc, element) => {
        acc.totalPrice += element.Price;
        acc.totalWeight += element.Weight
        return acc
    }, { totalPrice: 0, totalWeight: 0, parcelCharge: 0 })

    details.parcelCharge = calcParcelCharge(details?.totalWeight)

    return (
        <div className='w-full my-3 bg-[#374151] text-white p-3 rounded-md'>
            <h1 className='font-semibold text-2xl underline'>Package{i + 1}</h1>
            <p>Items: {curr?.map((item) => item.Name + " | ")}</p>
            <p>Total price: {details?.totalPrice}</p>
            <p>Total weight: {details?.totalWeight}</p>
            <p>Total charge: {details?.parcelCharge}</p>
        </div>
    )
}

export default PackageCard