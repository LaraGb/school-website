import React from "react";
import Container from "../../../shared/components/container/Container";
import Heading from "../../../shared/components/heading/Title";
import Paragraph from "../../../shared/components/paragraph/Paragraph";
import InfoCard from "../../../shared/components/info_card/InfoCard";

const Feature = () => {
  return (
    <>
      <Container>
        <div className="md:w-2/3 lg:w-1/2">
          <Heading>A technology-first approach to payments and finance</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
            ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
            minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
            magni adipisci.
          </Paragraph>
        </div>
        <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
          <InfoCard />
          <InfoCard />
          <InfoCard />
          <InfoCard />
        </div>
      </Container>
    </>
  );
};

export default Feature;
