import React from 'react'

type cardsGridT = {
    CardComponent:React.FC<any>,
    data:Array<any>
}

const CardsGrid = ({CardComponent,data}:cardsGridT) => {
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {
        data.map(item => <CardComponent {...item}/>)
      }
    </div>
  )
}

export default CardsGrid
