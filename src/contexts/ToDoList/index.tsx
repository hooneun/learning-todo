import {createContext, useState} from "react";

interface Context {
    readonly toDoList: string[];
    readonly onAdd: (toDo: string) => void;
    readonly onDelete: (toDo: string) => void;
}

const ToDoListContext = createContext<Context>({
    toDoList: [],
    onAdd: (toDo: string) => {},
    onDelete: (toDo: string) => {},
})

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const ToDoListContextProvider = ({children}: Props) => {
    const [toDoList, setToDoList] = useState(["공부하기", "운동하기", "책 읽기"]);

    const onDelete = (todo: string) => {
        setToDoList(toDoList.filter((item) => item !== todo));
    };

    const onAdd = (toDo: string) => {
        setToDoList([...toDoList, toDo]);
    };

    return (
        <ToDoListContext.Provider value={{toDoList, onAdd, onDelete}}>
            {children}
        </ToDoListContext.Provider>
    )
}

export {ToDoListContext, ToDoListContextProvider};