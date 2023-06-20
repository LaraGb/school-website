import React from 'react'

const Column = ({children,gap}:{children:React.ReactNode,gap?:string}) => {
  return (
    <div className={`flex flex-col gap-${gap || 2} items-start`}>
      {children}
    </div>
  )
}

export default Column
