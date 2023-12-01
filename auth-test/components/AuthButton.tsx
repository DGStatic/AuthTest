import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
  className: string;
};

const AuthButton = ({ onClick, className, children }: Props) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

export default AuthButton;
