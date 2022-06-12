import { useColorMode, Text, Flex, Box, Icon } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import type { FC, ReactNode } from "react";
import { NAVBAR_ITEMS } from "../constants/NavbarItems";
import { SocialBar } from "../components/SocialBar";

type TPageLayoutProps = {
  children: ReactNode;
};

export const PageLayout: FC<TPageLayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "white",
    dark: "#171717",
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

    .nav-item {
      position: relative;
      padding: 0.5em 0.5em;
    }

    .nav-item::before,
    .nav-item::after {
      content: "";
      width: 14px;
      height: 14px;
      transition: all 0.35s ease;
      position: absolute;
      opacity: 0;
    }

    .nav-item::before {
      right: 0;
      top: 0;
      border-right: 3px solid #e57364;
      border-top: 3px solid #e57364;
      transform: translate(-100%, 50%);
    }
    .nav-item::after {
      left: 0;
      bottom: 0;
      border-left: 3px solid #e57364;
      border-bottom: 3px solid #e57364;
      transform: translate(100%, -50%);
    }
    .nav-item:hover::before,
    .nav-item:hover::after {
      transform: translate(0, 0);
      opacity: 1;
    }
  `;

  return (
    <>
      <StickyNav
        className='nav__container'
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        maxWidth='1440px'
        width='100%'
        bg={bgColor[colorMode]}
        as='nav'
        height='64px'
        mb={[0, 0, 8]}
        borderBottom={"2px solid #171717"}
        boxShadow={`0px 0px 15px rgba(0, 0, 0, 1)`}
      >
        <SocialBar />
        <Box className='wrapper'>
          <Text className='typing-demo' fontFamily={"SourceCodePro-SemiBold"}>
            Nyhz
          </Text>
        </Box>
        <Flex as='ul' gap={"48px"}>
          {NAVBAR_ITEMS.map((item) => (
            <Flex alignItems='center'>
              <Text
                as='li'
                className='nav-item'
                listStyleType={"none"}
                fontFamily={"SourceCodePro-SemiBold"}
                _hover={{
                  bgColor: bgColor[colorMode],
                  cursor: "pointer",
                }}
                key={item.text}
              >
                {item.text}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Box>
          <ColorModeSwitcher />
        </Box>
      </StickyNav>
      <Flex
        as='main'
        justifyContent={"center"}
        alignItems='center'
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
