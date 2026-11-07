"use client";

import { useState, useEffect } from "react";

export default function CurrentYear({ fallback = "2025" }: { fallback?: string }) {
  const [year, setYear] = useState(fallback);

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return <span>{year}</span>;
}
