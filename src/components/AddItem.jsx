import React, { useState } from "react";

export default function AddItem({ onClick }) {
  const [text, setText] = useState("");
  const clickAddButton = () => {
    const randomID = crypto.randomUUID();
    onClick({ id: randomID, text, checked: false });
    setText("");
  };

  return (
    <div className="flex justify-between h-10">
      <Input onChange={setText} value={text} />
      <AddButton onClick={clickAddButton} text={text} />
    </div>
  );
}

function Input({ onChange, value }) {
  return (
    <input
      className="w-full pl-2 focus:outline-none border-2 rounded-tl-md rounded-bl-md"
      placeholder="Add Todo"
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
}

function AddButton({ onClick }) {
  return (
    <button
      className="bg-orange-500 text-white w-20 rounded-tr-md rounded-br-md"
      onClick={onClick}
    >
      Add
    </button>
  );
}
