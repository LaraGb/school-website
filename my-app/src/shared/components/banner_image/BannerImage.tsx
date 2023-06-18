import React from 'react'

const BannerImage = () => {
  return (
    <section className='overflow-hidden'>
       <div
    className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[400px] bg-[url('https://tecdn.b-cdn.net/img/new/standard/city/078.jpg')]">
    <div
      className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
    
    </div>
  </div>

  <div
    className="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
    <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
        fill="currentColor"></path>
    </svg>
  </div>
    </section>
  )
}

export default BannerImage
