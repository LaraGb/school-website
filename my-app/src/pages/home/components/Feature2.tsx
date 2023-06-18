import React from "react";
import Container from "../../../shared/components/container/Container";
import IconCircle from "../../../shared/components/icon_circle/IconCircle";
import Paragraph from "../../../shared/components/paragraph/Paragraph";
import Heading from "../../../shared/components/heading/Title";
import { pageIcons } from "../../../shared/utils/pageIcons";
import StylizedLinkBtn from "../../../shared/components/stylized_link_btn/StylizedButton";
import Teste from "./Teste";

const Feature2 = () => {
  return (
    <Container>
      <div className="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
        <div className="md:5/12 lg:w-1/2">
          <Teste />
        </div>
        <div className="md:7/12 lg:w-1/2">
          <Heading>
            Nuxt development is carried out by passionate developers
          </Heading>
          <Paragraph>
            Nossa escola oferece uma educação de qualidade, focada no
            desenvolvimento acadêmico e pessoal dos alunos. Com professores
            dedicados e um ambiente acolhedor, estamos comprometidos em ajudar
            cada aluno a atingir seu máximo potencial.
          </Paragraph>
          <Paragraph>
            Estamos prontos para ajudar você a construir as bases para um futuro
            promissor. Venha nos visitar e descubra como nossa escola pode fazer
            a diferença na vida do seu filho. Junte-se a nós na Escola Omar
            Donato Bassani e embarque em uma jornada incrível rumo ao sucesso
          </Paragraph>
          <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <div className="mt-8 flex gap-4 md:items-center">
              <IconCircle
                bg="primary-light"
                color="primary"
                Icon={pageIcons.Date}
              />
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                  Enriquecimento extracurricular
                </h4>
                <Paragraph>
                  Asperiores nemo possimus nesciunt quam mollitia.
                </Paragraph>
              </div>
            </div>
            <div className="pt-4 flex gap-4 md:items-center">
              <IconCircle
                bg="secondary-light"
                color="secondary"
                Icon={pageIcons.Date}
              />
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                  Real Time Location
                </h4>
                <Paragraph>
                  Asperiores nemo possimus nesciunt quam mollitia.
                </Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

/*
<div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
            <div className="mt-8 flex gap-4 md:items-center">
              <IconCircle/>
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">Chat Anytime</h4>
                <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
              </div> 
              </div>
            </div> 
            <div className="pt-4 flex gap-4 md:items-center">
              <IconCircle/>
              <div className="w-5/6">
                <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">Real Time Location</h4>
                <p className="text-gray-500 dark:text-gray-400">Asperiores nemo possimus nesciunt quam mollitia.</p>
              </div> 
            </div> 
          </div>

*/

export default Feature2;
