import React from 'react';
import IconCircle,{TIconCircle} from '../icon_circle/IconCircle';
import Column from '../column/Column';
import Paragraph from '../paragraph/Paragraph';
import { pageIcons } from '../../utils/pageIcons';

type infrastructureCardT = {
  title:string;
  content:string;
  iconData:TIconCircle;
}

const InfrastructureCard = ({title,content,iconData}:infrastructureCardT) => {
 const {Icon,bg,color} = iconData;

 console.log(bg,color);

  return (
    <div className='px-4 py-6 border rounded-lg shadow_color'>
      <Column>
        <div>
          <IconCircle Icon={pageIcons.Date} bg='primary' color='white'/>
        </div>
        <Column>
           <h3 className="font-bold text-xl">{title}</h3>
           <Paragraph>
             {content}
           </Paragraph>
        </Column>
      </Column>
    </div>
  )
}

export default InfrastructureCard
