import React from 'react'

const FlexToColumn = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='space-y-6 justify-between text-gray-600 md:flex  md:gap-6 md:space-y-0 lg:gap-12 lg:items-center'>
      {children}
    </div>
  )
}

export default FlexToColumn
