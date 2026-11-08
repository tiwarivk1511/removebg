"use client";

import { useEffect } from "react";
import { analyticsPromise } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  useEffect(() => {
    if (analyticsPromise) {
      analyticsPromise.then((analytics) => {
        if (analytics) {
          console.log("Firebase Analytics initialized successfully (Measurement ID: G-SC92Q40G3H)");
        }
      });
    }
  }, []);

  return null;
}
