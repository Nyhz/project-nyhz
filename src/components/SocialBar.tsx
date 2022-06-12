import { Flex } from "@chakra-ui/react";
import { SocialItem } from "./SocialItem";
import { SOCIAL_ITEMS } from "../constants/SocialItems";

export const SocialBar = () => {
  return (
    <Flex flexDirection={"column"} position={"absolute"} left={5} top={85}>
      {SOCIAL_ITEMS.map((item, idx) => (
        <SocialItem
          key={idx}
          icon={item.icon}
          bgColor={item.bgColor}
          url={item.url}
        />
      ))}
    </Flex>
  );
};
