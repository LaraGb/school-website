import React from 'react'

const Paragraph = ({children}:{children:string}) => {
  return (
    <p className="max-w-[96%] text-gray-600 text-sm dark:text-gray-300">
       {children}
   </p>
  )
}

export default Paragraph
