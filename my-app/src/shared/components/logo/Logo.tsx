import React from 'react';
import * as animationData from '../../../assets/animations/idea4.json';
import Animation from '../animation/Animation';
import FlexCenter from '../flex_center/FlexCenter';


const Logo = () => {
  return (
    <FlexCenter>
      <Animation animation={animationData} width={40} height={40}/>
      <span className='font-bold'>
         Omar Donato Bassani
      </span>
    </FlexCenter>
  )
}

export default Logo
