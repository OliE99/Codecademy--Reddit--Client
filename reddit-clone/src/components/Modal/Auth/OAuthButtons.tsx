import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithApple } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase/clientApp';

const OAuthButtons:React.FC = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    {/*const [signInWithApple, user, loading, error] = useSignInWithApple(auth);*/}
    
    return (
       <Flex direction="column" width="100%" mb={4}>
            <Button 
            variant="oauth" 
            mb={2} 
            isLoading={loading} 
            onClick={() => signInWithGoogle()}
            >
                <Image src="/images/googlelogo.png" height="20px" mr={4}/>
                Continue with Google
            </Button>
            <Button 
            variant="oauth"
            >
                <Image src="/images/applelogo.png" height="20px" mr={4}/>
                Continue with Apple
            </Button>
            {error && <Text>{error.message}</Text>}
       </Flex> 
    );
};
export default OAuthButtons;