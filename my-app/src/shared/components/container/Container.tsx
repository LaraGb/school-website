import React from "react";
import WideWrapping from "../wide_wrapping/WideWrapping";
import removeFirstWord from "../../utils/removeFirstWord";

type ContainerT = {
  children:React.ReactNode;
  title?:string;
  subTitle?:string;
  label?:string;
  background?:string;
}

const Container = ({children,title,subTitle,label,background}:ContainerT) => {
  return (
    <div className={`mx-auto px-6 py-20 md:px-12 xl:px-6 ${background || ''}`}>
      <WideWrapping> 
        {
          title &&  (<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
             <div>
               {
                label && (<p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  {label}
                </p>)
               }
             </div>
             <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto capitalize">
               <span className="relative inline-block">
            
                 <span className="relative">{title.split(' ')[0]}</span>
               </span>{' '}
                {removeFirstWord(title)}
             </h2>
             <p className="text-base text-gray-700 md:text-lg">
               {
                subTitle
               }
             </p>
           </div>)
        }
      
       {children}
     </WideWrapping>
    </div>
  );
};

export default Container;
