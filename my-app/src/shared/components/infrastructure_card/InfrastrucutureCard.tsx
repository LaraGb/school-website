import React from 'react';
import IconCircle from '../icon_circle/IconCircle';
import { IconType } from 'react-icons/lib';
import Column from '../column/Column';

type infrastructureCardT = {
  title:string;
  content:string;
  icon:IconType;
}

const InfrastructureCard = ({title,content,icon}:infrastructureCardT) => {

  return (
    <div className="p-5 border rounded shadow-sm">
    <Column>
      <IconCircle Icon={icon} bg='primary-light' color='primary'/>
      <h6 className="mb-2 font-semibold leading-5">{title}</h6>
      <p className="mb-3 text-sm text-gray-900">
        {content}
      </p>
    </Column>
  </div>
  )
}

export default InfrastructureCard
