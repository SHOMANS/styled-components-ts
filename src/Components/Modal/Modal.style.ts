import styled from "styled-components";

interface IProps {
  openModal: boolean;
}

export const StyledModal = styled.div<IProps>`
  display: ${(props) => (props.openModal ? "flex" : "none")};
  background-color: #00000019;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  z-index: 9999999999;
  cursor: pointer;
  & > div {
    padding: 30px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 5px;
    text-align: center;
    cursor: auto;
  }
`;
