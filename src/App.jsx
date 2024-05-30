import './App.css'

import { useState } from 'react';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('Asc');


  const addTodo = (title, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        title,
        category,
        isCompleted: false
      },
    ];

    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const todosFiltered = newTodos.filter(todo => todo.id !== id ? todo : null)
    setTodos(todosFiltered);
  }

  return <div className='app'>
    <h1>Todo List</h1>
    <Search search={search} setSearch={setSearch}/>
    <Filter 
      filter={filter} 
      setFilter={setFilter} 
      setSort={setSort}
    />
    <div className='todo-list'>
      {todos
      .filter((todo) =>
        filter === 'All' 
          ? true 
          : filter === 'Completed' 
              ? todo.isCompleted 
              : !todo.isCompleted 
      )
      .filter((todo) => 
        todo.title.toLowerCase().includes(search.toLocaleLowerCase())
      )
      .sort((a, b) => 
        sort == 'Asc' 
          ? a.title.localeCompare(b.title) 
          : b.title.localeCompare(a.title)
      )
      .map( (todo) => (
        <Todo 
          key={todo.id} 
          todo={todo} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo} 
        />
      ))}
    </div>
    <NewTodo addTodo={addTodo}/>
  </div>
}

export default App;
