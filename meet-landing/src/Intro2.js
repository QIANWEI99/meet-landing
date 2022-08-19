import React from 'react';

import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  Image,
  Link,
  VStack,
  HStack,
  Stack,
  Code,
  Grid,
  theme,
  extendTheme,
  Button,
  Flex,
  Center
} from '@chakra-ui/react';

const Intro2 = () => {
    return (
        <Flex
        direction='row'
        mb='200px'
        overflow='hidden'>
            <Image
            //w={['294px','294px','394px','394px']}
            //h={['203px','203px','303px','303px']}
            marginLeft='-8' 
            src='/image-hero-left.png' 
            alt='Heroleft' />
            
            <Flex 
            direction='column' 
            align='center'
            w='70%'
            gap={8}>
                <Box>
                   <Heading 
                   fontFamily='Red Hat Display Black' 
                   fontSize='64px' 
                   color='#28283D' 
                   lineHeight='64px'>Group Chat<br></br>for Everyone</Heading>
                </Box>
              
                <Box>
                  <Text 
                  fontFamily='Red Hat Display Medium' 
                  fontSize='18px' 
                  color='#87879D' 
                  lineHeight='26px'
                  align='center'>Meet makes it easy to connect with others face-to-face virtually<br></br>and collaborate across any device.</Text>
                </Box>

                <Box>
                    <Flex 
                    direction='row' 
                    gap={4}>
                      <Button padding='25px' borderRadius='30px' backgroundColor='#4D96A9' color='white' variant='solid'>Download v1.3</Button>
                      <Button padding='25px' borderRadius='30px' backgroundColor='#855FB1' color='white' variant='solid'>What is it?</Button>
                    </Flex>
                </Box>
                
            </Flex>
              <Image marginRight='-8' src='/image-hero-right.png' alt='HeroRight' />
        </Flex>
    );
}
 
export default Intro2;