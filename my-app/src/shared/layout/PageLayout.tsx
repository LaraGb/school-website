import React from 'react'
import Header from './header/Index';
import Footer from './footer/Index';

const PageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <div className='grow'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default PageLayout
