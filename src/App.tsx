// basic css
import "./App.css";

// components
import { FirebaseProvider } from "./context/FirebaseProvider";
import ChatRoom from "./component/ChatRoom";
import Login from "./component/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <FirebaseProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </FirebaseProvider>
    </Router>
  );
}

export default App;
