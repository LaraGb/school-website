import React from 'react'

const FlexCenter = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex items-center'>
      {children}
    </div>
  )
}

export default FlexCenter
