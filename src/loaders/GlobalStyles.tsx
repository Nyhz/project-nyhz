import { Global, css } from "@emotion/react";
import { FC, ReactNode } from "react";
import { useColorMode } from "@chakra-ui/react";

type TGlobalStylesProps = {
  children: ReactNode;
};

export const GlobalStyles: FC<TGlobalStylesProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #root {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "" : "#171717"};
          }
        `}
      />
      {children}
    </>
  );
};
