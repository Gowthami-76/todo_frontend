import React, { useState, useEffect } from "react";
function TodoModal({ editForm, todo, onSave, onClose }) {
  const [title, setTitle] = useState("");
  const [list, setList] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, list, _id: todo?._id });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4">ADD TODO</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              className="w-full border px-4 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">LIST</label>
            <textarea
              className="w-full border px-4 py-2"
              value={list}
              onChange={(e) => setList(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;
