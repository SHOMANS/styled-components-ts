import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const StyledAutoComplete = styled.input`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #999;
  transition: all 0.4s;
  width: 100%;
  &:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

interface IChoicesWrapperProps {
  openChoices: boolean;
}

export const ChoicesWrapper = styled.div<IChoicesWrapperProps>`
  display: ${(props) => (props.openChoices ? "flex" : "none")};
  flex-direction: column;
  width: calc(100% - 5px);
  margin: auto;
  border: 1px solid #999;

  max-height: 300px;
  overflow-y: scroll;
  & button {
    background: none;
    border: none;
    transition: all 0.1s;
    padding: 10px;
    margin-bottom: 1px;
    &:hover {
      background-color: #ccc;
    }
  }
`;
