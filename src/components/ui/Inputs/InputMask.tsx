import { useMask } from "@react-input/mask";

interface IProps {
  mask: string;
  placeholder: string;
}

const InputMask = ({ mask, placeholder }: IProps) => {
  const inputRef = useMask({
    mask: mask,
    separate: true,
    replacement: { 0: /\d/ },
  });

  return (
    <>
      <input ref={inputRef} placeholder={placeholder} />
    </>
  );
};

export default InputMask;
