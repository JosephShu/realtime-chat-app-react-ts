import { db } from "../../utilits/firebase";
import { getAuth, User } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState, useCallback, ChangeEvent } from "react";

const SendText = () => {
  const [text, setText] = useState<string>("");

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const contentHandler = useCallback(handlerChange, [handlerChange]);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    if (!text) return;

    const { uid, photoURL } = getAuth().currentUser as User;
    const docRef = await addDoc(collection(db, "messages"), {
      message: text,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setText("");
  };

  return (
    <form
      className="fixed bottom-0 left-0 w-full h-16 bg-zinc-900 flex items-center"
      onSubmit={sendMessage}
    >
      <div className="w-4/5 h-full py-2 px-5">
        <input
          className="w-full h-full border-white border-b-2 bg-transparent text-white focus:outline-none"
          type="text"
          value={text}
          placeholder="Say SomeThing..."
          onChange={contentHandler}
        />
      </div>

      <div className="w-1/5 h-full bg-green-200 p-4 rounded-lg">
        <button className="w-full h-full" type="submit" disabled={!text}>
          Send
        </button>
      </div>
    </form>
  );
};

export default SendText;
