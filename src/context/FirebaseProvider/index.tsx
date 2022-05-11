import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import LoadingSpinner from "../../component/LoadingSpinner";

import { db } from "../../utilits/firebase";

interface contextValue {
  user: User | undefined;
  db: Firestore;
}

export const FirebaseContext = createContext<null | contextValue>(null);

export const FirebaseProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    onAuthStateChanged(getAuth(), (user) => {
      setLoading(false);
      if (!user) {
        navigate("/");
        return;
      }
      setUser(user);

      navigate("/chat");
    });
  }, [user, navigate]);

  const value: contextValue = {
    user,
    db,
  };

  return (
    <FirebaseContext.Provider value={value}>
      {!loading ? children : <LoadingSpinner />}
    </FirebaseContext.Provider>
  );
};
