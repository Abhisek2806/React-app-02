import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  trasform: 'translate (-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl'
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} p="16">
        <Heading
          textTransform={'uppercase'}
          py={"2"}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
        h={"full"}
        p={"4"}
        alignItems={"center"}
        direction={["column","row"]}
        >
          <Img src={img1} h={["40","400"]}filter={'hue-rotate(-130deg)'}/>
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cum officia labore obcaecati a, incidunt quo dolorem itaque saepe similique voluptatibus corrupti, id maiores temporibus, ad dolores ipsum illum ullam.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false} >

    <Box w={'full'} h={'100vh'}>
      <Img src={img1} />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img2} />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Game is  The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img3} />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img4} />
      <Heading bg={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Night Life Is Cool
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img5} />
      <Heading bg={"whiteAlpha.600"} color={"black"} {...headingOptions}>
        Game is  The Future
      </Heading>
    </Box>
  </Carousel>
)


export default Home