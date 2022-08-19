import React from 'react';

import {
  Box,
  Text,
  Image,
  Button,
  Flex,
  Center
} from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box mt='200px' background='#4D96A9'>
          <Image src='/image-footer.jpg' alt='footer' 
          opacity={0.1}
          boxSize={['0','0','0','100%','100%','100%']}/>

          <Image src='/tablet/image-footer.jpg' alt='footer'
          opacity={0.1}
          boxSize={['0','0','100%','0','0','0']}/>

          <Image src='/mobile/image-footer.jpg' alt='footer'
          opacity={0.1}
          boxSize={['100%','0','0','0','0','0']}/>

          <Flex 
          direction={['column','column','column','row','row','row','row']}
          justifyContent='space-evenly'>
            <Box>
              <Text 
              mt={['-350px','100px','-350px','-150px','-210px','-350px']}
              align= {['center','center','center','left','left','left']}
              fontFamily='font.heading'
              fontSize={['34px','64px','44px','40px','54px','84px']}
              color='#FAFAFA' 
              lineHeight={['34px','64px','44px','40px','54px','84px']}>Experience more<br></br>together</Text>
            </Box>
                
            <Box>
              <Text 
              mt={['-230px','-200px','-200px','-140px','-190px','-350px']}
              align='center'
              fontFamily='font.heading'
              fontSize={['12px','18px','15px','15px','18px','40px']} 
              color='#FAFAFA' 
              lineHeight={['18px','26px','22px','20px','26px','60px']}>Stay connected with reliable HD meetings<br></br> and unlimited one-on-one and group<br></br> video sessions.</Text>
            </Box>

            <Box>
            <Center>
              <Button
              _active={{bg: '#D9B8FF'}}
              _hover={{bg: '#D9B8FF'}}
              mt={['-170px','-150px','-150px','-230px','-300px','-500px']}
              fontSize={['12px','18px','15px','14px','17px','30px']} 
              padding={['15px','26px','25px','23px','28px','50px']}
              borderRadius={['20px','30px','30px','30px','30px','50px']}
              backgroundColor='#855FB1' 
              color='white' 
              variant='solid'>Download v1.3</Button>
              </Center>
            </Box>
          </Flex>
        </Box>

    );
}
 
export default Footer;