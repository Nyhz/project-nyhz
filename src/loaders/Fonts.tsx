import { Global } from "@emotion/react";

export const Fonts = () => {
  return (
    <Global
      styles={`
      @font-face {
        font-family: "SourceCodePro-Regular";
        src: url("/fonts/SourceCodePro-Regular.ttf") format("truetype");
        font-display: block;
      }
      @font-face {
        font-family: "SourceCodePro-Medium";
        src: url("/fonts/SourceCodePro-Medium.ttf") format("truetype");
        font-display: block;
      }
      @font-face {
        font-family: "SourceCodePro-SemiBold";
        src: url("/fonts/SourceCodePro-SemiBold.ttf") format("truetype");
        font-display: block;
      }
      @font-face {
        font-family: "SourceCodePro-Bold";
        src: url("/fonts/SourceCodePro-Bold.ttf") format("truetype");
        font-display: block;
      }
        `}
    />
  );
};
