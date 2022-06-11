import React from "react";
import { useColorMode, Text, Flex, Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import type { FC, ReactNode } from "react";
import { NAVBAR_ITEMS } from "../constants/NavbarItems";

type TPageLayoutProps = {
  children: ReactNode;
};

export const PageLayout: FC<TPageLayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickyNav
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        maxWidth='1440px'
        width='100%'
        bg={bgColor[colorMode]}
        as='nav'
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx='auto'
      >
        <Flex gap={"48px"}>
          {NAVBAR_ITEMS.map((item) => (
            <Text
              backgroundColor={bgColor[colorMode]}
              _hover={{
                bgColor: bgColor[colorMode],
                opacity: 0.5,
                cursor: "pointer",
              }}
              key={item}
            >
              {item}
            </Text>
          ))}
        </Flex>
        <ColorModeSwitcher />
      </StickyNav>
      <Flex
        as='main'
        justifyContent={"center"}
        flexDirection='column'
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};
