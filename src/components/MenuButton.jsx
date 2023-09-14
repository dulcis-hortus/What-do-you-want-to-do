import React from "react";

export default function MenuButton({ value, currentMenu, onClick }) {
  return (
    <button
      className={
        value === currentMenu
          ? "text-orange-500 font-semibold mx-1 underline decoration-2"
          : "text-orange-500 font-semibold mx-1 opacity-75"
      }
      value={value}
      onClick={(e) => onClick(e.target.value)}
    >
      {value}
    </button>
  );
}
