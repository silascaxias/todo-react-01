import { useState } from 'react'

const NewTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return;
    addTodo(title, category)
    setTitle('');
    setCategory('');
  }

  return (
    <div className='todo-form'>
      <h2>Create task:</h2>
      <form onSubmit={onSubmit}>
        <input 
          type='text' 
          placeholder='Title'
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value=''>Select a category</option>
          <option value='Work'>Work</option>
          <option value='Personal'>Personaly</option>
          <option value='Study'>Study</option>
        </select>
        <button type='submit'>Create Task</button>
      </form>
    </div>
  )
}

export default NewTodo