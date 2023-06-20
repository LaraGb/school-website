import React,{useEffect,useState} from 'react';
import Container from '../../shared/components/container/Container';
import aboutApi from '../../services/about';
import BannerImage from '../../shared/components/banner_image/BannerImage';
import FeatureWithImage from '../../shared/components/feature_with_img/FeatureWithImage';
import InfrastrucutureCard from '../../shared/components/infrastructure_card/InfrastrucutureCard';
import CardsGrid from '../../shared/components/cards_grid/CardsGrid';
import { pageIcons } from '../../shared/utils/pageIcons';
import schoolStructure from '../../configs/schoolStructure';

const Index = () => {
  const [about,setAbout] = useState<any>({});
 
  useEffect(()=>{
    const getAboutData = async() =>{
      const data = await aboutApi.getAbout();
      data && setAbout(data)
    }

    getAboutData()
  },[]);
  

  return (
    <>
     <BannerImage/>

     <Container
        label="nossa infraestrutura"
        title="Infraestrutura Escolar"
        subTitle="Uma infraestrutura sólida e acolhedora, onde os alicerces do conhecimento são construídos, proporcionando um ambiente propício para o crescimento e o aprendizado."
      >

        <CardsGrid CardComponent={InfrastrucutureCard} data={schoolStructure} />
      </Container>

     <Container>
       <FeatureWithImage
         title='Conheça Nossa História'
         paragraphs={[about.content,about.content2]}
       />
     </Container>
  
    </>
  );
};

export default Index
