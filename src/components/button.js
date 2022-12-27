import React from 'react'

function Button({text}) {
  return (
    <button className='bg-blue-700 p-4 min-w-[100px] rounded-lg active:bg-blue-900 hover:bg-blue-800'>{text}</button>
  )
}

export default Button