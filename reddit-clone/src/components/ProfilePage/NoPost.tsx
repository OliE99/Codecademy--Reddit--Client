import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

function NoPost({}: Props) {
  return (
    <Flex justify="center" pt="50px">
      <Stack spacing={5}>
        <Image
          src="../../images/convo.png"
          height="200px"
        />
        <Text
          fontSize="20pt"
          color="gray.500"
          fontWeight="bold"
          textAlign="center"
        >
          No Post Yet!
        </Text>
      </Stack>
    </Flex>
  );
}

export default NoPost;