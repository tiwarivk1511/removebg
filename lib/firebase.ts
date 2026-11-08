import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAZiRDQu0dBXI_vrFwu2Wrjnd8n4GZ7lnI",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "removebg-281c8.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "removebg-281c8",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "removebg-281c8.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "831901261726",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:831901261726:web:822e5abd3613193e22008f",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-SC92Q40G3H",
};

// Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics Instance (Client-side safe with isSupported check)
let analyticsPromise: Promise<Analytics | null> | null = null;

if (typeof window !== "undefined") {
  analyticsPromise = isSupported().then((supported) => (supported ? getAnalytics(app) : null));
}

export { app, analyticsPromise };
