import React from 'react'
import Paragraph from '../paragraph/Paragraph'
import { Link } from 'react-router-dom'
import IconCircle from '../icon_circle/IconCircle';
import { pageIcons } from '../../utils/pageIcons';
import Column from '../column/Column';



const BlogCard = () => {
  return (
    <div className="group bg-white rounded overflow-hidden shadow">
      <div className="relative overflow-hidden ">
        <img src="https://cdn.discordapp.com/attachments/1048588250421411861/1100566280240636024/image.png" 
        alt="art cover" loading="lazy" width="1000" height="667" className="h-60 w-full object-cover object-top transition duration-500 group-hover:scale-105 rounded-none"/>
      </div>
      <div className="px-3 py-4">
        <Column>
        <div className="font-bold text-xl">Mountain</div>
        <div className='flex items-center gap-2'>
          <pageIcons.Date/>
          <span className='text-sm'>
            22/07/2022
          </span>
        </div>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </Paragraph>
  
        </Column>
      </div>
    </div>
   )
}







export default BlogCard;
