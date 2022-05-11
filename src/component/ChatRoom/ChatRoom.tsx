//Component
import * as auth from "firebase/auth";

//Component
import CustomButton from "../CustomButton";
import CustomHeader from "../CustomHeader";
import IF from "../IF";

const ChatRoom = () => {
  const signOut = () => {
    auth.signOut(auth.getAuth());
  };

  return (
    <div className="chat-room">
      <CustomHeader>
        <div>Logo</div>
        <CustomButton tailwind="block" onEvent={signOut}>
          Log Out
        </CustomButton>
      </CustomHeader>
    </div>
  );
};

export default ChatRoom;
