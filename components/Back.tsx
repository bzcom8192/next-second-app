"use client"

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export default function Back() {
  return (
    <button className={`${inter.className} block`} onClick={() => window.history.back()}>
      {"<--"}
    </button>
  );
}
