import { memo, useRef, useState } from "react";
import {
  ChoicesWrapper,
  StyledAutoComplete,
  Wrapper,
} from "./AutoComplete.style";

interface IProps {
  data: string[];
  value: string;
  onChange: Function;
  name: string;
  placeholder?: string;
}

function AutoComplete({ data, onChange, value, placeholder, name }: IProps) {
  const [state, setstate] = useState<string>(value);
  const [openChoices, setOpenChoices] = useState<boolean>(false);
  const [Choices, setChoices] = useState<string[]>([...data]);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickChoice = (item: string) => {
    setstate(item);
    setOpenChoices(false);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstate(e.target.value);
    setChoices(data.filter((item) => item.includes(e.target.value)));
    onChange(e.target.value);
  };

  const handleFocusInput = () => {
    setOpenChoices(true);
  };

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      null !== ref.current &&
      null !== e.target &&
      ref.current.contains(e.target as any)
    ) {
    } else {
      setOpenChoices(false);
    }
  };

  document.addEventListener("mousedown", checkIfClickedOutside);

  return (
    <Wrapper ref={ref}>
      <StyledAutoComplete
        onChange={handleChangeInput}
        value={state}
        placeholder={placeholder}
        onFocus={handleFocusInput}
        name={name}
      />
      {Choices.length > 0 && (
        <ChoicesWrapper openChoices={openChoices}>
          {Choices.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                handleClickChoice(item);
              }}
            >
              {item}
            </button>
          ))}
        </ChoicesWrapper>
      )}
    </Wrapper>
  );
}

export default memo(AutoComplete);
