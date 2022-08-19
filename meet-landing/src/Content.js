import React from 'react';

import {
  Box,
  Text,
  Heading,
  Image,
  Grid,
  Center,
  GridItem
} from '@chakra-ui/react';

const Content = () => {
    return (
        <Box>
        <Center>
            <Grid 
            mt='120px' 
            mb='100px' 
            w='80%' 
            templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)','repeat(4, 1fr)']}
            gap={['4','4','2','10','10','10']}>
                <GridItem><Image src='/image-woman-in-videocall.jpg' alt='pic1'
                borderRadius='10px' /></GridItem>
                <GridItem><Image src='/image-women-videochatting.jpg' alt='pic1'
                 borderRadius='10px' /></GridItem>
                <GridItem><Image src='/image-men-in-meeting.jpg' alt='pic1' 
                 borderRadius='10px' /></GridItem>
                <GridItem><Image src='/image-man-texting.jpg' alt='pic1' 
                 borderRadius='10px' /></GridItem>
            </Grid>
        </Center>

        <Text 
        align='center' 
        fontFamily='Red Hat Display Black' 
        fontSize={['16px','26px','15px','15px','16px','30px']}
        lineHeight={['26px','26px','22px','20px','26px','60px']}
        letterSpacing='4px' 
        color='#4D96A9'>BUILT FOR MODERN USE</Text>

        <Box align='center'>
          <Box>
            <Heading 
            align='center' 
            fontFamily='Red Hat Display Black' 
            fontSize={['30px','60px','40px','40px','60px','90px']}
            color='#28283D' 
            my={5} 
            lineHeight={['34px','64px','44px','44px','64px','94px']}>Smarter meetings, all<br></br>in one place</Heading>
          </Box>

        </Box>

        <Box align='center'>
          <Box>
            <Text 
            align='center' 
            fontFamily='Red Hat Display Medium' 
            fontSize={['10px','26px','15px','15px','16px','30px']}
            color='#87879D' 
            lineHeight={['18px','26px','22px','20px','26px','45px']}>
              Send messages, share files, show your screen, and record your<br></br>meetings — all in one workspace. Control who can join with
              <br></br>invite-only team access, data encryption, and data export.</Text>
          </Box>
        </Box>
        </Box>
    );
}
 
export default Content;