// basic css
import "./App.css";

// firebase SDK
import * as firebase from "firebase/app";
import * as fireStore from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import * as auth from "firebase/auth";

// firebase hooks
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

// components
import ChatRoom from "./component/ChatRoom";
import CustomButton from "./component/CustomButton";
import IF from "./component/IF";
import LoadingSpinner from "./component/LoadingSpinner";

// hooks
import { useState } from "react";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC3pKDKRj_78yKK47R-DJtq9P2lqBg1Qes",
  authDomain: "realtime-chatroom-react.firebaseapp.com",
  projectId: "realtime-chatroom-react",
  storageBucket: "realtime-chatroom-react.appspot.com",
  messagingSenderId: "983387332163",
  appId: "1:983387332163:web:aa45fd65d405fc7aed7ef6",
  measurementId: "G-2PELZ1WKEM",
});

const analytics = getAnalytics(app);
const firestore = fireStore.getFirestore();

function App() {
  const [user] = useAuthState(auth.getAuth());
  const [loading, setLoading] = useState<boolean>(true);

  const tiktok = setTimeout(() => {
    setLoading(false);
  }, 1000);

  const signIn = () => {
    const provider = new auth.GoogleAuthProvider();
    auth.signInWithPopup(auth.getAuth(), provider);
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          <IF is={!user}>
            <CustomButton
              tailwind="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              onEvent={signIn}
            >
              Loggin with Google
            </CustomButton>
          </IF>
          <IF is={user}>
            <ChatRoom></ChatRoom>
          </IF>
        </>
      )}
    </>
  );
}

export default App;
