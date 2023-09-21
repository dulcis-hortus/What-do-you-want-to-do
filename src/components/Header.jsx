import React, { useContext } from "react";
import { DarkModeContext } from "@/context/DarkModeContext";
import { TbMoonFilled } from "react-icons/tb";
import { MdWbSunny } from "react-icons/md";
import MenuButton from "@/components/MenuButton";
import { ALL, ACTIVE, COMPLETED } from "@/constant";

export default function Header({ menu, setMenu }) {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="mb-6 flex justify-between">
      <button onClick={toggleDarkMode}>
        {darkMode ? (
          <MdWbSunny className="text-2xl text-yellow-500" />
        ) : (
          <TbMoonFilled className="text-xl text-yellow-500" />
        )}
      </button>
      <div className="justify-end flex">
        {[ALL, ACTIVE, COMPLETED].map((value) => (
          <MenuButton
            value={value}
            currentMenu={menu}
            onClick={setMenu}
            key={value}
          />
        ))}
      </div>
    </div>
  );
}
