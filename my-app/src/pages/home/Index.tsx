import React from "react";
import Banner from "./components/Banner";
import Container from "../../shared/components/container/Container";
import CardsGrid from "../../shared/components/cards_grid/CardsGrid";
import BlogCard from "../../shared/components/blog_card/BlogCard";
import StylizedLinkBtn from "../../shared/components/stylized_link_btn/StylizedButton";
import InfrastrucutureCard from "../../shared/components/infrastructure_card/InfrastrucutureCard";
import FeatureWithImage from "../../shared/components/feature_with_img/FeatureWithImage";
import schoolStructure from "../../configs/schoolStructure";
import { pageIcons } from "../../shared/utils/pageIcons";
import Heading from "../../shared/components/heading/Heading";
import Paragraph from "../../shared/components/paragraph/Paragraph";
import FlexToColumn from "../../shared/components/flex_to_column/FlexToColumn";
import Column from "../../shared/components/column/Column";
import EventCard from "../../shared/components/event_card/EventCard";

const Index = () => {
  return (
    <>
      <Banner />

      <Container
        title="Estamos sempre pensando no bem do aluno"
        label="Infraestrutura"
        subTitle="Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?"
      >
        <CardsGrid CardComponent={InfrastrucutureCard} data={schoolStructure} />
      </Container>

      <Container>
        <FeatureWithImage
          title="Educação Pessoal, Sucesso Extraordinário"
          paragraphs={[
            "A educação escolar desempenha um papel crucial na formação e no desenvolvimento das crianças e jovens. É na escola que eles adquirem conhecimentos acadêmicos, habilidades cognitivas e sociais, além de valores fundamentais. Através da educação escolar, os alunos são expostos a uma ampla variedade de disciplinas, permitindo-lhes explorar seus interesses, desenvolver suas habilidades e preparar-se para futuras oportunidades educacionais e profissionais",
            " Além disso, a escola também desempenha um papel importante na socialização, ajudando os alunos a interagir com os outros, a compreender a diversidade, a desenvolver habilidades de trabalho em equipe e a cultivar valores de respeito, tolerância e cooperação. A educação escolar, portanto, desempenha um papel essencial na formação dos indivíduos e na construção de uma sociedade educada e progressiva.",
          ]}
          linkLabel="Leia Sobre Nós"
          linkPath="/about"
        />
      </Container>


      <Container
        label="novos artigos"
        title="Atualize-se Com Nossas Postagens"
        subTitle="Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?"
      >
        <CardsGrid CardComponent={BlogCard} data={[1, 2, 3]} />
        <div className="pt-10 flex justify-center">
          <StylizedLinkBtn
            isHighlighted={true}
            path="/"
            label="Carregar Mais Artigos"
          />
        </div>
      </Container>



      <Container
        label="Artigos Recentes"
        title="Latest Events"
        subTitle="Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?"
      >
        <CardsGrid CardComponent={EventCard} data={[1, 2, 3]} />
        <div className="pt-10 flex justify-center">
          <StylizedLinkBtn
            isHighlighted={true}
            path="/"
            label="Carregar Mais Artigos"
          />
        </div>
      </Container>

   
    </>
  );
};

export default Index;
