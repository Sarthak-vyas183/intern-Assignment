/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [tododesc, setdesc] = useState("");
  const [priority, setPriority] = useState("mid");

  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    //addTodo({ id: Date.now(), todo: todo, completed: false });
    addTodo({ todo, desc: tododesc, priority: priority, completed: false });
  };
  return (
    <form onSubmit={add} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <input
        type="text"
        placeholder="Write Todo description......."
        className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={tododesc}
        onChange={(e) => setdesc(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full md:w-2/3 lg:w-1/2 border border-black/10 rounded-lg px-3 py-1.5 bg-white/20 outline-none duration-150 text-sm sm:text-base"
      >
        <option className="text-black" value="High">
          High
        </option>
        <option className="text-black" value="Medium">
          Medium
        </option>
        <option className="text-black" value="Low">
          Low
        </option>
      </select>

      <button
        type="submit"
        className="rounded-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
