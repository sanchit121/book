import { Link } from "react-router-dom";
import styled from "styled-components";
import { coolGrey, white, linkBlue } from "../../common/colors";

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
`;

export const StyledLink = styled(Link)<{ isSelected?: boolean }>`
  color: ${(props) => (props.isSelected ? linkBlue : coolGrey)};
  text-decoration: none;
`;

export const StyledContainer = styled.div`
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${white};
  padding: 0 130px;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogoText = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-left: 5px;
`;
