import * as React from "react";
import styled from "styled-components";
import { iconButtonColor } from "../../common/colors";

const StyledButtonContent = styled.div`
  display: flex;
  align-items: center;
`;

const StyledButtonText = styled.div`
  padding-left: 8px;
`;

const StyledButton = styled.button`
  color: ${iconButtonColor};
  border: none;
  font-size: 12px;
  background-color: inherit;
  cursor: pointer;
`;

type IconbuttonProps = {
  imgSrc: string;
  text: string;
};

const IconButton = ({ imgSrc, text }: IconbuttonProps) => {
  return (
    <StyledButton>
      <StyledButtonContent style={{ display: "flex" }}>
        <img src={imgSrc} />
        <StyledButtonText>{text}</StyledButtonText>
      </StyledButtonContent>
    </StyledButton>
  );
};

export default IconButton;
