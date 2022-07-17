import React from "react";
import { TodoContext } from "../TodoContext";
import {TodoCounter} from "../TodoCounter";
import {TodoSearch} from "../TodoSearch";
import {TodoList} from "../TodoList";
import {TodoItem} from "../TodoItem";
import {TodoCreateButton} from "../TodoCreateButton";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm";

function AppUI(){
    const {
        error,
        loading,
        searchedTodo,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
            {error && <p>desesperate paso algo</p>}
            {loading && <p>Estamos Cargando no desesperes</p>}
            {(!loading && !searchedTodo.length) && <p>Crea tu primer TODO</p> } 
            {searchedTodo.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=> completeTodos(todo.text)} onDelete={()=> deleteTodos(todo.text)}/>
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <TodoCreateButton setOpenModal={setOpenModal}/>

        </React.Fragment>
    );
}

export {AppUI}