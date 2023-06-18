import React from 'react';
import Paragraph from '../paragraph/Paragraph';
import Heading from '../heading/Title';
import Teste from '../../../pages/home/components/Teste';
import IconCircle from '../icon_circle/IconCircle';
import { pageIcons } from '../../utils/pageIcons';
import { IconType } from 'react-icons/lib';
import Column from '../column/Column';

type featureWithImageT = {
  title:string;
  paragraphs:Array<string>;
  highlights?:Array<{icon:IconType,title:string,info:string}>;

}

const FeatureWithImage = ({title,paragraphs,highlights}:featureWithImageT) => {
  return (
    <>
      <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
        <div className="md:5/12 lg:w-1/2">
          <Teste />
        </div>
        <div className="md:7/12 lg:w-1/2">
         <Column>
            <Heading>
             {title}
          </Heading>
          {
            paragraphs?.map((paragraph,index) => <Paragraph key={index}>{paragraph}</Paragraph>)
          }
          {
            highlights?.map((highlight => (
                <div className="mt-8 flex gap-4 md:items-center">
              <IconCircle
                bg="primary-light"
                color="primary"
                Icon={highlight.icon}
              />
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                  {highlight.title}
                </h4>
                <Paragraph>
                 {highlight.info}
                </Paragraph>
              </div>
            </div>
            )))
          }
            </Column>
        </div>
      </div>
    </>
  )
}

export default FeatureWithImage
