import React from 'react';
import { IconType} from 'react-icons/lib';

export type TIconCircle = {
  Icon:IconType;
  bg:string;
  color:string;
}



const IconCircle = ({Icon,bg,color}:TIconCircle) => {
   const circleClasses = `w-14 h-14 flex items-center justify-center  rounded-full ${
    bg ? `bg-${bg}` : ""
  } ${color ? `text-${color}` : ""}`

  return (
    <div className={circleClasses}>  
      <Icon font-size='1.8rem'/>
    </div>
  )
}

export default IconCircle
