import React from "react";
import Paragraph from "../paragraph/Paragraph";
import Heading from "../heading/Heading";
import Teste from "../../../pages/home/components/Teste";
import IconCircle from "../icon_circle/IconCircle";
import { pageIcons } from "../../utils/pageIcons";
import { IconType } from "react-icons/lib";
import Column from "../column/Column";
import StylizedLinkBtn from "../stylized_link_btn/StylizedButton";

type featureWithImageT = {
  title: string;
  paragraphs: Array<string>;
  linkLabel?:string;
  linkPath?:string;
};

const FeatureWithImage = ({
  title,
  paragraphs,
  linkLabel,
  linkPath
}: featureWithImageT) => {
  return (
    <>
      <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
        <div className="md:5/12 lg:w-1/2">
          <img src="https://polyuni.com.br/pluginfile.php/173/block_cocoon_about_1/content/shutterstock_366568778.png" alt="" />
        </div>
        <div className="md:7/12 lg:w-1/2">
          <Column>
            <Heading>{title}</Heading>
            {paragraphs?.map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
            {linkLabel && <StylizedLinkBtn isHighlighted={true} label={linkLabel} path={linkPath || '/'}/>}
          </Column>
        </div>
      </div>
    </>
  );
};

export default FeatureWithImage;
