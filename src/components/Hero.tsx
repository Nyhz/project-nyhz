import { Box, Flex, Text, keyframes, Grid, GridItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ProjectContainer } from "./ProjectContainer";
import { PROJECT_ITEMS } from "../constants/ProjectItems";

const blurAnimation = keyframes`
  0% {
    text-shadow: red -3px 2px, cyan 2px -2px
  }
  5% {
    text-shadow: none
  }
  10% {
    text-shadow: red 2px -2px, cyan -2px 0
  }
  25% {
    text-shadow: red 2px 0, cyan -2px 2px
  }
  35% {
    text-shadow: red -2px 3, cyan 2px 0
  }
  55% {
    text-shadow: none
  }
  65% {
    text-shadow: red -2px 2px, cyan 2px -2px
  }
  70% {
    text-shadow: red -3px 0, cyan 2px 0
  }
  80% {
    text-shadow: red -2px 2px, cyan 3px 2px
  }
  100% {
    text-shadow: red -3px 0, cyan 2px 0
  }
`;

const AnimatedText = styled(Text)`
  animation: ${blurAnimation} 5s infinite;
`;

export const Hero = () => {
  return (
    <Box height={"100vh"} width={"80%"}>
      <AnimatedText
        className='blurred-text'
        fontSize={"5xl"}
        fontFamily={"SourceCodePro-Bold"}
      >
        nyhz.dev()
      </AnimatedText>
      <Flex
        width={"100%"}
        justifyContent='center'
        flexDirection={"column"}
        alignItems='center'
        mt={6}
      >
        <Text fontFamily={"SourceCodePro-SemiBold"} fontSize={"2xl"} mr='auto'>
          // projects
        </Text>
        <Grid mt={4} templateColumns='repeat(3, 1fr)' gap={4}>
          {PROJECT_ITEMS.map((project) => (
            <GridItem>
              <ProjectContainer
                key={project.name}
                name={project.name}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};
