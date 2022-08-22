import React from 'react';

import {
  Box,
  Center,
  Image
} from '@chakra-ui/react';

const Header = () => {
    return (
        <Box>
            <Center my={['10','10','20','20','20','40']}>
            <Image src='/logo.svg' alt='logo'
                w={['80px','100px','110px','120px','140px','280px']}
               />
          </Center>
        </Box>
    );
}
 
export default Header;