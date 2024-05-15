import React from 'react'
import Carousel from 'better-react-carousel';

export const CarouselComponent = () => {

  return (
              <Carousel cols={1} rows={1} gap={3} loop={true} autoplay={2000}>
                <Carousel.Item>
                  <img style={{cursor: 'pointer'}} width="100%" src="/images/am.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{cursor: 'pointer'}} width="100%" src="/images/fl.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{cursor: 'pointer'}} width="100%" src="/images/sw.jpg" />
                </Carousel.Item>
              </Carousel>
  )
}
