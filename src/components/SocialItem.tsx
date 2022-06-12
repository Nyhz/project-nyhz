import { Flex, Icon } from "@chakra-ui/react";
import { FC } from "react";
import type { IconType } from "react-icons";
import styled from "@emotion/styled";

type TSocialItemProps = {
  icon: IconType;
  bgColor: string;
  url: string;
};

const StyledSocialFlex = styled(Flex)`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  border-radius: 15%;
  cursor: pointer;

  .anchor {
    align-items: center;
    margin-top: 4px;
  }
`;

export const SocialItem: FC<TSocialItemProps> = ({ icon, bgColor, url }) => {
  return (
    <a className='anchor' href={url} target='_blank' rel='noopener'>
      <StyledSocialFlex bgColor={bgColor}>
        <Icon as={icon} color='white' />
      </StyledSocialFlex>
    </a>
  );
};
