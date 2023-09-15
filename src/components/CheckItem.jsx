import { DarkModeContext } from "@/context/DarkModeContext";
import React, { useContext, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { ImCheckboxUnchecked } from "react-icons/im";
import { MdDelete } from "react-icons/md";

export default function CheckItem({ data, onDelete, onChange }) {
  return (
    <div className="flex items-center justify-between w-96 mb-1">
      <CheckBox onChange={onChange} data={data} />
      <DeleteIcon onDelete={() => onDelete(data.id)} />
    </div>
  );
}

function CheckBox({ data, onChange }) {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <label htmlFor={`checkIcon-${data.id}`} className="flex items-center">
      <input
        type="checkbox"
        id={`checkIcon-${data.id}`}
        checked={data.checked}
        onChange={(e) => {
          onChange(data.id, e.target.checked);
        }}
        className="appearance-none"
      ></input>
      {data.checked ? (
        <FaCheckSquare className="text-xl text-orange-500 mr-1.5" />
      ) : (
        <ImCheckboxUnchecked className="text-lg text-orange-500 mr-2" />
      )}
      <p
        className={
          darkMode
            ? `${
                data.checked
                  ? "text-gray-400 text-xl select-none line-through font-Cafe24Shiningstar"
                  : "text-white text-xl select-none font-Cafe24Shiningstar"
              }`
            : `${
                data.checked
                  ? "text-gray-400 text-xl select-none line-through font-Cafe24Shiningstar"
                  : "text-gray-700 text-xl select-none font-Cafe24Shiningstar"
              }`
        }
      >
        {data.text}
      </p>
    </label>
  );
}

function DeleteIcon({ onDelete }) {
  return (
    <div
      className="p-0.5 bg-gray-500 rounded-full hover:animate-crackle"
      onClick={onDelete}
    >
      <MdDelete className="text-xl text-white" />
    </div>
  );
}
