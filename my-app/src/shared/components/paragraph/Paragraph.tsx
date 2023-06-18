import React from 'react'

const Paragraph = ({children}:{children:string}) => {
  return (
    <p className="text-gray-600 text-sm dark:text-gray-300">
       {children}
   </p>
  )
}

export default Paragraph
