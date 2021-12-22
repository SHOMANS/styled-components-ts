import { useRef } from "react";
import { StyledModal } from "./Modal.style";

interface IProps {
  children: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  openModal: boolean;
  setOpenModal: Function;
}

export default function Modal({ openModal, children, setOpenModal }: IProps) {
  const ref = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      null !== ref.current &&
      null !== e.target &&
      ref.current.contains(e.target as any)
    ) {
      console.log("object");
    } else {
      setOpenModal(false);
    }
  };

  document.addEventListener("mousedown", checkIfClickedOutside);

  return (
    <StyledModal openModal={openModal}>
      <div ref={ref}>{children}</div>
    </StyledModal>
  );
}
