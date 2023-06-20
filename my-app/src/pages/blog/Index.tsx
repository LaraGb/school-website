import React from 'react'
import BannerImage from '../../shared/components/banner_image/BannerImage'
import Container from '../../shared/components/container/Container'
import CardsGrid from '../../shared/components/cards_grid/CardsGrid';
import BlogCard from '../../shared/components/blog_card/BlogCard';
import EventCard from '../../shared/components/event_card/EventCard';

const Index = () => {
  return (
    <>
      <BannerImage/>
      <Container
       title='Confira Nossos Eventos'
      >
        <CardsGrid
          data={[1,2,3]}
          CardComponent={EventCard}
        />
      </Container>
      <Container
       title='Confira Nossos Posts'
      >
        <CardsGrid
          data={[1,2,3]}
          CardComponent={BlogCard}
        />
      </Container>
    </>
  )
}

export default Index
