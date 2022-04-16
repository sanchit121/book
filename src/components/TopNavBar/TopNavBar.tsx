import React from "react";
import {
  StyledContainer,
  StyledLink,
  StyledLinkContainer,
  StyledLogoContainer,
  StyledLogoText,
} from "./TopNavBar.styles";
import logo from "../../assets/images/app_logo.png";
import { BrowserRouter } from "react-router-dom";

type TopNavBarProps = {
  menus: Menu[];
};

export type Menu = {
  id: number;
  name: string;
  isSelected?: boolean;
  to: string;
};

const TopNavBar = ({ menus }: TopNavBarProps) => {
  return (
    <BrowserRouter>
      <StyledContainer>
        <StyledLogoContainer>
          <img src={logo} />
          <StyledLogoText>Instaread</StyledLogoText>
        </StyledLogoContainer>
        <StyledLinkContainer>
          {menus.map((item) => (
            <StyledLink to={item.to} isSelected={item.isSelected}>
              {item.name}
            </StyledLink>
          ))}
        </StyledLinkContainer>
      </StyledContainer>
    </BrowserRouter>
  );
};

export default TopNavBar;
