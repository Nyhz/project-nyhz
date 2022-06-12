import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

type TProjectContainerProps = {
  name: string;
  description: string;
  image: string;
  url: string;
};

export const ProjectContainer: FC<TProjectContainerProps> = ({
  name,
  description,
  image,
  url,
}) => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems='center'
      border={"1px solid black"}
      borderRadius={"12px"}
      boxShadow={"0px 0px 12px black"}
    >
      <Text fontFamily={"SourceCodePro-SemiBold"} fontSize={"xl"}>
        {name}
      </Text>
      <Text mt={2} fontFamily={"SourceCodePro-Regular"} fontSize={"md"}>
        {description}
      </Text>
      <a href={url} target='_blank'>
        <Flex
          overflow={"hidden"}
          minH='260px'
          maxH='260px'
          borderRadius={"0px 0px 12px 12px"}
          _hover={{ opacity: 0.6, cursor: "pointer" }}
        >
          <Image mt={2} objectFit='cover' src={image} />
        </Flex>
      </a>
    </Flex>
  );
};
