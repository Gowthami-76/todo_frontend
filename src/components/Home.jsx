import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoTable from "./TodoTable";
import TodoModal from "./TodoModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  deleteTodoSuccess,
  toDoSuccess,
  todoSelected,
} from "../redux/login/actions";

function Home() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [editForm, setEditForm] = useState(false);
  const { _id, access_token } = useSelector((state) => state.user);
  const loading = useSelector((state) => state.loading);
  console.log(loading, "LOADING");
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTodos();
  }, []);

  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  };
  const fetchTodos = async () => {
    const response = await axios.get(
      `http://localhost:3000/to-do-list/getList?userId=${_id}`,
      config
    ); // Replace with your API endpoint
    setTodos(response.data);
  };

  const handleAddOrUpdateTodo = async (todo) => {
    console.log(todo, "TODO");
    if (editForm) {
      try {
        console.log(_id, "USERID editform true");
        const response = await axios.post(
          "http://localhost:3000/to-do-list/update",
          {
            _id: todo._id,
            title: todo.title,
            desc: todo.list,
          },
          config
        );
      } catch (err) {
        console.log(err, "Error");
      }
    }
    if (!editForm) {
      try {
        console.log(_id, "USERID editform false");
        const response = await axios.post(
          "http://localhost:3000/to-do-list/create",
          {
            userId: _id,
            title: todo.title,
            desc: todo.list,
          },
          config
        );
        dispatch(
          toDoSuccess({
            toDoList: response.data.data.toDoList.desc,
            title: response.data.data.toDoList.title,
          })
        );
      } catch (err) {
        console.log(err, "Error");
      }
    }
    fetchTodos();
    setIsModalOpen(false);
  };
  const editModal = (todo) => {
    console.log(todo, "TODOOOO");
    setIsModalOpen(true);
    setCurrentTodo(todo);
    setEditForm(true);
    dispatch(todoSelected(todo));
  };
  const addTodo = () => {
    setIsModalOpen(true);
    setEditForm(false);
  };
  const removeTodo = (todo) => {
    console.log(todo, "REMOVE TODOOOO");
    dispatch(deleteTodo());
    axios
      .post(
        "http://localhost:3000/to-do-list/delete",
        {
          _id: todo._id,
        },
        config
      )
      .then((res) => dispatch(deleteTodoSuccess()))
      .catch((err) => console.log(err));
    fetchTodos();
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addTodo}
      >
        Add Todo
      </button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <TodoTable todos={todos} onEdit={editModal} onDelete={removeTodo} />
      )}
      {isModalOpen && (
        <TodoModal
          editForm={editForm}
          todo={currentTodo}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddOrUpdateTodo}
        />
      )}
    </div>
  );
}

export default Home;
