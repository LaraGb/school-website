import React from 'react';
import { IconType, icons } from 'react-icons/lib';

type TProps = {
  Icon:IconType;
  bg:string;
  color:string;
}



const IconCircle = ({Icon,bg,color}:TProps) => {
   const circleClasses = `w-10 h-10 flex items-center justify-center gap-4 rounded-full ${
    bg ? `bg-${bg}` : ""
  } ${color ? `text-${color}` : ""}`

  return (
    <div className={circleClasses}>  
      <Icon font-size='1.3rem'/>
    </div>
  )
}

export default IconCircle
