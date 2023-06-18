import React from 'react'

const Heading = ({children}:{children:string}) => {
  return (
    <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
      {children}
    </h2>
  )
}

export default Heading
