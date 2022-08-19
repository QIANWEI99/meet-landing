import React from 'react';

import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  Flex,
  Center
} from '@chakra-ui/react';

const Intro = () => {
    return (
        <Box>
            <Flex
            direction='row'
            overflow='hidden'
            justifyContent='space-between'
            mb={['0','0','0','100px','100px','300px']}
            gap={['4']}>
                <Image src='/image-hero-left.png' alt='Heroleft'
                marginLeft={['-4','-4','-6','-6','-10']}
                w={['0','0','0','293px','393px','693px']}
                h={['0','0','0','203px','303px','493px']}/>
                <Image src='/image-hero-right.png' alt='HeroRight'
                marginRight={['-4','-4','-6','-6','-10']}
                w={['0','0','0','293px','393px','693px']}
                h={['0','0','0','203px','303px','493px']}/>
            </Flex>
            <Image src='/tablet/image-hero.png' alt='Heroleft'
                w={['820px','820px','1020px','0','0','0']}
                h={['130px','253px','303px','0','0','0']}
                mb={['40px','40px','70px','0','0','0']}/>

            <Center>
                <Flex
                position={['','','','absolute']}
                direction='column' 
                align='center'
                top={['0','0','7%','7%','7%','8%']}
                gap={5}>
                        <Box>
                        <Heading 
                        fontFamily='font.heading'
                        fontSize={['34px','64px','44px','44px','64px','94px']}
                        color='#28283D' 
                        lineHeight={['34px','64px','44px','44px','64px','94px']}>Group Chat<br></br>for Everyone</Heading>
                        </Box>
                    
                        <Box>
                        <Text 
                        fontFamily='font.heading'
                        fontSize={['12px','18px','15px','15px','18px','40px']}
                        color='#87879D' 
                        lineHeight={['18px','26px','22px','20px','26px','60px']}
                        align='center'>Meet makes it easy to connect with others face-to-face virtually<br></br>and collaborate across any device.</Text>
                        </Box>

                        <Box>
                            <Flex 
                            direction={['column','column','row','row','row','row','row']}
                            gap={4}>
                            <Button
                            _active={{bg: '#8FE3F9'}}
                            _hover={{bg: '#8FE3F9'}}
                            fontSize={['10px','26px','15px','15px','16px','30px']}
                            padding={['15px','26px','25px','25px','25px','40px']}
                            borderRadius={['20px','30px','30px','30px','30px','40px']}
                            backgroundColor='#4D96A9' 
                            color='white' 
                            variant='solid'>Download v1.3</Button>

                            <Button
                            _active={{bg: '#D9B8FF'}}
                            _hover={{bg: '#D9B8FF'}}
                            fontSize={['10px','26px','15px','15px','16px','30px']}
                            padding={['15px','26px','25px','25px','25px','40px']}
                            borderRadius={['20px','30px','30px','30px','30px','40px']}
                            backgroundColor='#855FB1' 
                            color='white' 
                            variant='solid'>What is it?</Button>
                            </Flex>
                        </Box>
                </Flex>
            </Center>
        </Box>
        
    );
}
 
export default Intro;