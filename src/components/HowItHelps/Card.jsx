import React from 'react'

function Card({ icon, heading, text}) {
  return (
    <div className='p-6 bg-white rounded-lg border-[1px] border-gray-300 text-center
     py-12 gap-3'>  
        <div className='bg-brandWhite p-4 rounded-full w-fit mx-auto'>
            <img src={ icon } alt=" " className='w-12 mx-auto' />
        </div>
        <h4 className='my-4 text-lg font-bold'>{ heading }</h4>
        <p className='text-gray-400 text-sm'>
          { text }
        </p>  
    </div>
  )
}

export default Card