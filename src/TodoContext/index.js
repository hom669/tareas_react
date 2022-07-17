import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1',[]);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodo = [];
    
      if(!searchValue.length >= 1){
        searchedTodo = todos;
      }else{
        searchedTodo = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
        
      }
    
      const addTodos = (text) => {
        const newTodosAdd = [...todos];
        newTodosAdd.push({
          completed: false,
          text,
        });

        saveTodos(newTodosAdd);
    
      }
      
      const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        
        newTodos[todoIndex].completed = true;
    
        saveTodos(newTodos);
    
      }
    
      const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodosDel = [...todos];
        
        newTodosDel.splice(todoIndex,1);
    
        saveTodos(newTodosDel);
      }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            addTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            deleteTodos,
            completeTodos,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>

    );
}

export {TodoContext, TodoProvider}