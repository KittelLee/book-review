import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase 프로젝트 설정
const firebaseConfig = {
  apiKey: "AIzaSyAu1pu4r4m_kJLEyeL7Jgc6tWz94Upzk98",
  authDomain: "book-review-a7be9.firebaseapp.com",
  projectId: "book-review-a7be9",
  storageBucket: "book-review-a7be9.appspot.com",
  messagingSenderId: "905824431279",
  appId: "1:905824431279:web:f56fdfc06bc60dd733785a",
  measurementId: "G-L9QXD3H138",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firebase 인증 객체
export const auth = getAuth(app);
