import { memo, useContext } from "react";
import { FirebaseContext } from "../../context/FirebaseProvider";

interface createdAtType {
  nanoseconds: number;
  seconds: number;
}

interface Props {
  message: string;
  uid: string;
  photoURL: string;
  createdAt: createdAtType;
}

const Message = ({ message, uid, photoURL }: Props) => {
  const { user } = useContext(FirebaseContext);
  const messageClass = uid === user?.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img
        className="h-14 rounded-full"
        src={
          photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
        }
        alt="照片"
      />
      <p>{message}</p>
    </div>
  );
};

export default memo(Message);
