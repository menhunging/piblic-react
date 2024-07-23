import { useRef } from "react";
import { Transition } from "react-transition-group";

interface IProps {
  isOpen?: boolean;
  handleClick: () => void;
}

const Overlay = ({ isOpen, handleClick }: IProps) => {
  const nodeRef = useRef(null);

  return (
    <Transition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      unmountOnExit={true}
    >
      {(state) => (
        <div
          ref={nodeRef}
          onClick={handleClick}
          className={`overlay ${state}`}
        ></div>
      )}
    </Transition>
  );
};

export default Overlay;
