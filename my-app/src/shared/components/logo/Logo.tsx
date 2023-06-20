import React from 'react';
import * as animationData from '../../../assets/animations/idea4.json';
import FlexCenter from '../flex_center/FlexCenter';
import { Link } from 'react-router-dom';


const Logo = () => {
  return (
    <Link to="/">  
      <FlexCenter>
       <img src="logo.png" className="h-8 mr-3" alt="Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Omar Donato Bassani
        </span>
      </FlexCenter>
    </Link>

  )
}

export default Logo
