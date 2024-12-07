/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTodo } from "../Context";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [tododesc, setTododesc] = useState(todo.desc);
  const [todoPriority, setTodoPriority] = useState(todo.priority);
  const { updatedTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updatedTodo(todo.id, { ...todo, todo: todoMsg, desc: tododesc });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex flex-col border border-black/10 rounded-lg p-4 gap-3 shadow-sm duration-300 ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={todo.completed}
          onChange={toggleCompleted}
        />
        <h3
          className={`flex justify-between w-full  text-lg font-semibold ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          <span className="text-black">
            {todo.completed ? "Completed" : "Pending"}
          </span>
          <h1
            className={`px-2 rounded-sm bg-opacity-80 ${
              todoPriority === "High"
                ? "bg-blue-100 text-green-600" 
                : todoPriority === "Medium"
                ? "bg-blue-100 text-yellow-400"
                : "bg-blue-100 text-red-500"
            }`}
          >
            {todoPriority}
          </h1>
        </h3>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          className={`border text-black outline-none w-full bg-transparent rounded-lg px-3 py-1 ${
            isTodoEditable ? "border-black/10" : "border-transparent"
          } ${todo.completed ? "line-through text-gray-500" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-700">Description</label>
        <input
          type="text"
          className={`border text-black outline-none w-full bg-transparent rounded-lg px-3 py-1 ${
            isTodoEditable ? "border-black/10" : "border-transparent"
          } ${todo.completed ? "line-through text-gray-500" : ""}`}
          value={tododesc}
          onChange={(e) => setTododesc(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>

      <div className="flex justify-between mt-3">
        <button
          className="inline-flex items-center text-blue-900 px-3 py-1 rounded-lg text-sm border border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
          onClick={() => {
            if (todo.completed) return;

            if (isTodoEditable) {
              editTodo();
            } else setIsTodoEditable((prev) => !prev);
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? "Save" : "Edit"}
        </button>
        <button
          className="inline-flex items-center px-3 py-1 rounded-lg text-sm text-red-700 border border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
