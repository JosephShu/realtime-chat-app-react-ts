//firebase
import { getAuth, signOut } from "firebase/auth";
import { collection, query, orderBy, DocumentData } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

//Component
import CustomButton from "../CustomButton";
import CustomHeader from "../CustomHeader";
import SendText from "../SendText";
import Logo from "../Svg/Logo";
import Message from "../Message";

import { useRef, useEffect } from "react";
import { db } from "../../utilits/firebase";

const ChatRoom = () => {
  const messageRef = collection(db, "messages");
  const q = query(messageRef, orderBy("createdAt"));
  const [messages] = useCollectionData(q) as DocumentData[];
  const dummy = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!dummy.current) return;

    dummy.current.scrollIntoView();
  }, [messages]);

  const logOut = () => {
    signOut(getAuth());
  };

  return (
    <div className="chat-room">
      <CustomHeader>
        <Logo tailwind="w-28 mr-8" />
        <CustomButton tailwind="block" onEvent={logOut}>
          Log Out
        </CustomButton>
      </CustomHeader>
      <main className="overflow-auto w-full h-[calc(100%-128px)] py-8">
        {messages?.map((obj: DocumentData) => {
          const { message, uid, createdAt, photoURL } = obj;
          return (
            <Message
              key={message + uid + createdAt}
              message={message as string}
              uid={uid as string}
              createdAt={createdAt as any}
              photoURL={photoURL as string}
            />
          );
        })}
        <div ref={dummy}></div>
      </main>
      <SendText />
    </div>
  );
};

export default ChatRoom;
