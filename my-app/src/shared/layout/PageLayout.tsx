import React from 'react'
import Header from './header/Index';
import Footer from './footer/Index';

const PageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default PageLayout
