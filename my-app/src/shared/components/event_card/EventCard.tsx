import React from 'react'
import Column from '../column/Column'

const EventCard = () => {
  return (
<div className="flex items-center justify-center">
  <div className="flex flex-col w-full rounded">
    <img src="https://cdn.discordapp.com/attachments/1098057370728403115/1116523935777960048/IMG-20230608-WA0097.jpg" alt="National Championship" className="w-full h-68 bg-top bg-cover rounded-t object-cover"/>
    <div className="flex justify-between p-2">
        <h2 className='font-bold text-xl'>Copa Bassani</h2>
        <div className='flex text-gl gap-2'>
            <div>Jan</div>
            <div>13</div>
            <div>7 pm</div>
        </div>
    </div>
  </div>
</div>

  )
}

export default EventCard
