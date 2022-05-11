import { signInWithRedirect, getAuth, GoogleAuthProvider } from "firebase/auth";
import CustomButton from "../CustomButton";

const Login = () => {
  const SignIn = () => {
    signInWithRedirect(getAuth(), new GoogleAuthProvider());
  };

  return (
    <CustomButton
      tailwind="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      onEvent={SignIn}
    >
      Loggin with Google
    </CustomButton>
  );
};

export default Login;
