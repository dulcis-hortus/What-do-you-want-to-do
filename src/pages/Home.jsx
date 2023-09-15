import CheckItem from "@/components/CheckItem";
import AddItem from "@/components/AddItem";
import { useContext, useEffect, useState } from "react";
import { ALL, ACTIVE, COMPLETED } from "@/constant";
import MenuButton from "@/components/MenuButton";
import { TbMoonFilled } from "react-icons/tb";
import { MdWbSunny } from "react-icons/md";
import { DarkModeContext } from "@/context/DarkModeContext";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [todoListByMenu, setTodoListByMenu] = useState([]);
  const [menu, setMenu] = useState(ALL);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (localStorage.SAVED_DATA_KEY) {
      const savedTodoList = JSON.parse(localStorage.SAVED_DATA_KEY);
      setTodoList(savedTodoList);
    }
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (isMount) {
      localStorage.removeItem("SAVED_DATA_KEY");
      localStorage.SAVED_DATA_KEY = JSON.stringify(todoList);
    }
  }, [todoList, isMount]);

  const handleTodoListByMenu = (menu) => {
    switch (menu) {
      case ALL:
        setTodoListByMenu(todoList);
        break;
      case ACTIVE:
        setTodoListByMenu(todoList.filter((todo) => !todo.checked));
        break;
      case COMPLETED:
        setTodoListByMenu(todoList.filter((todo) => todo.checked));
        break;
      default:
        setTodoListByMenu(todoList);
    }
  };

  useEffect(() => {
    handleTodoListByMenu(menu);
  }, [menu, todoList, handleTodoListByMenu]);

  const handleChecked = (id, isChecked) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: isChecked };
      }
      return todo;
    });
    setTodoList(newTodoList);
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => id !== todo.id));
  };

  const addNewTodo = (newTodo) => {
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <main
      className={
        darkMode
          ? "max-w-md border-2 p-4 m-auto mt-20 bg-indigo-800"
          : "max-w-md border-2 p-4 m-auto mt-20 "
      }
    >
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
      {todoListByMenu?.map((todo) => (
        <CheckItem
          data={todo}
          onDelete={handleDelete}
          onChange={handleChecked}
          key={todo.id}
        />
      ))}
      <div className="mt-5">
        <AddItem onClick={addNewTodo} />
      </div>
    </main>
  );
}
