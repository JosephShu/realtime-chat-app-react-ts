import {
  useState,
  useCallback,
  useContext,
  ChangeEvent,
  FormEvent,
} from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { User } from "firebase/auth";
import { FirebaseContext } from "../../context/FirebaseProvider";

const SendText = () => {
  const [text, setText] = useState<string>("");
  const { user, db } = useContext(FirebaseContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const contentHandler = useCallback(handleChange, [handleChange]);

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) return;

    const { uid, photoURL } = user as User;

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
