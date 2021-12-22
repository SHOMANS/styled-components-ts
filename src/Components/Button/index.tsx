import { ReactText } from "react";
import { StyledButton, StyledOutlinedButton } from "./Button.style";

interface IProps {
  children: ReactText;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function Button({ children, onClick, type }: IProps) {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
}

export function OutlindedButton({ children, onClick, type }: IProps) {
  return (
    <StyledOutlinedButton onClick={onClick} type={type}>
      {children}
    </StyledOutlinedButton>
  );
}
