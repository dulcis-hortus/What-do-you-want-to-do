import React, { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";

export default function Layout({ children }) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <main
      className={
        darkMode
          ? "max-w-md border-2 p-4 m-auto mt-20 bg-indigo-800"
          : "max-w-md border-2 p-4 m-auto mt-20 "
      }
    >
      {children}
    </main>
  );
}
