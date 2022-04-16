import styled from "styled-components";
import { coolGrey, black, borderColor, white } from "../../common/colors";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const StyledHeaderText = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: ${black};
`;

export const StyledSubHeaderText = styled.div`
  font-size: 18px;
  color: ${black};
`;

export const StyledAuthorText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${coolGrey};
`;

export const StyledIconButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  border-top: solid 1px ${borderColor};
  border-bottom: solid 1px ${borderColor};
  padding: 5px 0;
  width: 82%;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StyledButton = styled.div`
  color: ${white};
  background-color: ${coolGrey};
  height: 32px;
  padding: 12px 16px 0px 16px;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
