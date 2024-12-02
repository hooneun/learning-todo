import { ToDoInput } from "../ToDoInput";
import { ShowInputButton } from "../ShowInputButton";
import React, { useState } from "react";

interface Props {
  readonly onAdd: (toDo: string) => void;
}
export const InputContainer = ({ onAdd }: Props) => {
  const [showToDoInput, setShowToDoInput] = useState(true);

  const onAddToDo = (toDo: string) => {
    onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onAdd={onAddToDo} />}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
};
