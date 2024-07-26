import React from "react";

function TodoTable({ todos, onEdit, onDelete }) {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2">Title</th>
          <th className="py-2">Description</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos?.data?.toDoList.map((todo) => (
          <tr key={todo._id}>
            <td className="border px-4 py-2">{todo.title}</td>
            <td className="border px-4 py-2">{todo.desc}</td>
            <td className="border px-4 py-2">
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => onEdit(todo, "Edit")}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => onDelete(todo)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
