import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const todoSearch = (event) => {
    setSearchValue(event.target.value);    
  };

  return (
    <input className="TodoSearch" placeholder="Cebolla" value={searchValue} onChange={todoSearch}/>
  );
  

}
  
export {TodoSearch};
  