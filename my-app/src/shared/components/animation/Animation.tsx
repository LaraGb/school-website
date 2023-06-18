import React from 'react';
import Lottie from 'react-lottie';

type animationType = {
  animation:any;
  width:string | number;
  height:string | number;
}

const Animation = ({animation,width,height}:animationType) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <>
        <Lottie 
          options={defaultOptions}
          height={width}
          width={height}
        />
      </>
    );
}

export default Animation
