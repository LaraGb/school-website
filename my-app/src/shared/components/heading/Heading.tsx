import React from 'react'

const Heading = ({children}:{children:string}) => {
  return (
    <h2 className="text-xl font-bold text-gray-700 dark:text-white md:text-4xl">
      {children}
    </h2>
  )
}

export default Heading
