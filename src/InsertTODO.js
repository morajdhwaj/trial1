/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { getToDB, InserttoDB } from "./PouchDB";

const InsertTODO = () => {
  const [input, setInput] = useState("");
  // eslint-disable-next-line no-console
  console.log(input);
  const itemEvent = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newTodo={
        tast:input,
        isDone: false,
    };
    await InserttoDB(newTodo);
    setInput("");
    const ret = await getToDB(); // need to understand
    // eslint-disable-next-line no-console
    console.log("ret======== ", ret);
  };

  return (
    <div>
      <h1>TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="border"
          name="mytodo"
          type="text"
          required={React}
          placeholder="Add TODOS"
          value={input}
          onChange={itemEvent}
        />
        <button>Add </button>
      </form>
    </div>
  );
}

export default InsertTODO;
