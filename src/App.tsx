import React from "react";
import styled from "styled-components";
import BookHeader from "./components/BookHeader/BookHeader";
import TopNavBar, { Menu } from "./components/TopNavBar/TopNavBar";
import { backGroundGrey } from "./common/colors";

const StyledContentContainer = styled.div`
  background-color: ${backGroundGrey};
  padding: 0 130px;
  height: 100vh;
`;

const StyledContainer = styled.div`
  height: 100vh;
`;

const StyledBookHeader = styled(BookHeader)`
  padding-top: 40px;
`;

const menus: Menu[] = [
  { id: 1, name: "Discover", to: "/discover" },
  { id: 1, name: "Search", to: "/search" },
  { id: 1, name: "Try Instaread", to: "/instaread", isSelected: true },
  { id: 1, name: "Login", to: "/login" },
];

function App() {
  return (
    <StyledContainer>
      <TopNavBar menus={menus} />
      <StyledContentContainer>
        <StyledBookHeader />
      </StyledContentContainer>
    </StyledContainer>
  );
}

export default App;
