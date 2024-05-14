import React from 'react'
import Carousel from 'better-react-carousel'
import { Container, Grid, Segment } from 'semantic-ui-react'

export const CarouselComponent = () => {

  return (
              <Carousel cols={1} rows={1} gap={3} loop={true} autoplay={2000}>
                <Carousel.Item>
                  <img style={{cursor: 'pointer'}} width="100%" src="/images/beat1.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{cursor: 'pointer'}} width="100%" src="/images/beat2.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{cursor: 'pointer'}} width="100%" src="/images/beat3.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                  <img style={{cursor: 'pointer'}} width="100%" src="/images/beat4.png" />
                </Carousel.Item>
              </Carousel>
    
  )
}