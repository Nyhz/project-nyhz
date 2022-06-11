import { ChakraProvider, ColorModeProvider, Box } from "@chakra-ui/react";
import customTheme from "./styles/theme";
import { PageLayout } from "./infrastructure/PageLayout";
import { Hero } from "./components/Hero";
import { Fonts } from "./loaders/Fonts";
import { GlobalStyles } from "./loaders/GlobalStyles";

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <ColorModeProvider
      options={{
        initialColorMode: "light",
        useSystemColorMode: true,
      }}
    >
      <Fonts />
      <GlobalStyles>
        <Box textAlign='center' fontSize='xl'>
          <PageLayout>
            <Hero />
          </PageLayout>
        </Box>
      </GlobalStyles>
    </ColorModeProvider>
  </ChakraProvider>
);
