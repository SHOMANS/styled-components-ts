import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  type: props.type || "button",
}))`
  cursor: pointer;
  padding: 15px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${(props) => props.theme.borderRadius};
  background: ${(props) => props.theme.backgroundColors.primary};
  color: ${(props) => props.theme.colors.secondary};
  margin: 20px;
  /* opacity: 0.9; */
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    display: block;
    width: 5px;
    height: 60px;
    background-color: cadetblue;
    position: absolute;
    left: -40px;
    top: -2px;
    opacity: 0.5;
    transform: rotate(20deg);
    transition: all 0.2s;
    box-shadow: 5px 5px 5px 15px #fff;
  }
  &:hover::after {
    left: 120%;
  }
`;

export const StyledOutlinedButton = styled(StyledButton)`
  border: 2px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  background: none;

  transition: all 0.2s;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
  }
  &::after {
    background: ${(props) => props.theme.backgroundColors.primary};
    z-index: -1;
  }
  &:hover::after {
    left: 0;
    top: 0;
    width: 100%;
    transform: rotate(0);
    opacity: 1;
  }
`;
