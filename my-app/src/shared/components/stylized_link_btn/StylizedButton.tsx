import React from 'react'

type PropsT = {
  label:string;
  path:string;
  isHighlighted?:boolean;
}

const StylizedLinkBtn = ({label,path,isHighlighted}:PropsT) => {
  return (
    <a 
      href="/"
      className={`inline-block  rounded-full bg-warning px-6 py-3 text-sm font-bold capitalize leading-normal transition duration-150 ease-in-out hover:bg-warning-600  focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]
      ${isHighlighted ? 'bg-primary text-white  shadow-[0_4px_9px_-4px_#e4a11b] hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]' : 'bg-transparent text-gray-600'}`}
    >
      {label}
    </a>
  )
}

export default StylizedLinkBtn
