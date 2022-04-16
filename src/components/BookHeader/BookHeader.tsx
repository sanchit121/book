import React from "react";
import bookCover from "../../assets/images/book_cover.png";
import IconButton from "../IconButton/IconButton";
import {
  StyledAuthorText,
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledHeaderText,
  StyledIconButtonContainer,
  StyledSubHeaderText,
  TitleContainer,
} from "./BookHeader.styles";
import iconRead from "../../assets/images/folded_newspaper.svg";
import iconListen from "../../assets/images/audio_headphones.svg";
import iconLibrary from "../../assets/images/library.svg";
import iconBuyBook from "../../assets/images/buy_book.svg";

type BookHeaderProps = {
  className?: string;
};

const BookHeader = ({ className }: BookHeaderProps) => {
  return (
    <StyledContainer className={className}>
      <img src={bookCover} />
      <TitleContainer>
        <StyledHeaderText>
          Astrophysics for People in a Hurry’s Summary
        </StyledHeaderText>
        <StyledSubHeaderText>Key Insights & Analysis</StyledSubHeaderText>
        <StyledAuthorText>
          Kelly Brogan, MD with Kristin Loberg
        </StyledAuthorText>
        <StyledIconButtonContainer>
          <IconButton imgSrc={iconRead} text={"18 min read"} />
          <IconButton imgSrc={iconListen} text={"14 min listen"} />
          <IconButton imgSrc={iconLibrary} text={"Add to Library"} />
          <IconButton imgSrc={iconBuyBook} text={"Buy Book"} />
        </StyledIconButtonContainer>
        <StyledButtonContainer>
          <StyledButton>Business & Finance</StyledButton>
          <StyledButton>Business & Finance</StyledButton>
        </StyledButtonContainer>
      </TitleContainer>
    </StyledContainer>
  );
};

export default BookHeader;
