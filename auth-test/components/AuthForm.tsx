import AuthButton from "./AuthButton";

type Props = {
  className: string;
};

const AuthForm = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <AuthButton onClick={() => {}} className="">
        Sign Up
      </AuthButton>
    </div>
  );
};

export default AuthForm;
