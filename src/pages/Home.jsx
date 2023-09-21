import CheckItem from "@/components/CheckItem";
import AddItem from "@/components/AddItem";
import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { ALL, ACTIVE, COMPLETED } from "@/constant";

export default function Home() {
  const [todoList, setTodoList] = useState([]);
  const [todoListByMenu, setTodoListByMenu] = useState([]);
  const [menu, setMenu] = useState(ALL);
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
    <Layout>
      <Header menu={menu} setMenu={setMenu} />
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
    </Layout>
  );
}
