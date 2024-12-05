import {ToDoInput} from "../ToDoInput";
import {ShowInputButton} from "../ShowInputButton";
import React, {useState} from "react";

// interface Props {
//   readonly onAdd: (toDo: string) => void;
// }

export const InputContainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  // const onAddToDo = (toDo: string) => {
  //   onAdd(toDo);
  //   setShowToDoInput(false);
  // };

  const onClose = () => {
    setShowToDoInput(false);
  }

  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton show={showToDoInput} onClick={() => setShowToDoInput(!showToDoInput)} />
    </>
  );
};
