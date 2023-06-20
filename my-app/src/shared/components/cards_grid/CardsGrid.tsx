import React from 'react'
import Pagination from '../pagination/Pagination'

type cardsGridT = {
    CardComponent:React.FC<any>,
    data:Array<any>
}

const CardsGrid = ({CardComponent,data}:cardsGridT) => {
  
  return (
   <>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4'>
        {
          data.map(item => <CardComponent {...item}/>)
        }
     </div>

   </>
  )
}

export default CardsGrid
