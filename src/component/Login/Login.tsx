import { signInWithRedirect, getAuth, GoogleAuthProvider } from "firebase/auth";
import CustomButton from "../CustomButton";

const Login = () => {
  const SignIn = () => {
    signInWithRedirect(getAuth(), new GoogleAuthProvider());
  };

  return (
    <div className="h-24 w-52 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center">
      <CustomButton tailwind="block" onEvent={SignIn}>
        Loggin with Google
      </CustomButton>
      <CustomButton tailwind="block" onEvent={SignIn}>
        Loggin with Facebook
      </CustomButton>
    </div>
  );
};

export default Login;
