// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// 🔑 Replace these values with your Firebase console values
const firebaseConfig = {
  apiKey: "AIzaSyAW6rJOip8zSZ4dUrU5NroTOVDju4gdTh0",
  authDomain: "lomychat.firebaseapp.com",
  projectId: "lomychat",
  storageBucket: "lomychat.firebasestorage.app",
  messagingSenderId: "556633248856",
  appId: "1:556633248856:web:fd93d8fe7a825c2cd0a62d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

