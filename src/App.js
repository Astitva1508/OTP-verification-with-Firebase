import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDP4zNJWErz7TXYAzJ_GLx5BVqVhsUrDyU",
  authDomain: "learning-firebase-28947.firebaseapp.com",
  projectId: "learning-firebase-28947",
  storageBucket: "learning-firebase-28947.appspot.com",
  messagingSenderId: "171450845942",
  appId: "1:171450845942:web:4f72e4f8286b3e7825bad7"
};

const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>This is a React App</>
  );
}

export default App;
