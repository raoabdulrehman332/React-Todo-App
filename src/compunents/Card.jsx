import React from 'react'
import { useState } from 'react'

export default function Card() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editTodo, setEditTodo] = useState('');
    
    // Add Todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // Delete Todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  // Edit Todo
  const startEdit = (index) => {
    setEditIndex(index);
    setEditTodo(todos[index]);
  };

  const saveEdit = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? editTodo : todo
    );
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTodo('');
  };
    
    
  return (
    <>
    <div className="w-full max-w-96 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
  <form className=" space-y-6" action="#">
    <h5 className="text-3xl text-center font-medium text-gray-900 dark:text-white">
      To-do App 🚀
    </h5>
    <div className='flex flex-row justify-between'>
      
      <input
        type="text"
        name="text"
        id="text"
        className=" h-12  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="ToDo text.."
        required=""
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
    <button
      type="submit"
      className="h-12  mx-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
     onClick={addTodo}>
      Add
    </button>
    </div>

    <div>
    <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item w-full flex justify-between my-5">
            {editIndex === index ? (
              <div className="edit-container flex flex-row items-center justify-evenly w-full">
                <input
                  type="text"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                  className=" h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
                <div>
                <button className='bg-none stroke:#000 mx-5 text-xl  hover:text-sky-400' onClick={saveEdit}><i class="fa-regular fa-floppy-disk"></i></button>

                </div>
              </div>
            ) : (
              <>
                <span>{todo}</span>
                <div>

                <button className='bg-none stroke: #000 mx-5 text-lg hover:text-sky-400' onClick={() => startEdit(index)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className='bg-none stroke: #000  hover:text-red-400 ' onClick={() => deleteTodo(index)}><i class="fa-solid fa-trash"></i></button>

                </div>
              </>
            )}
          </li>
        ))}
      </ul>

        
    </div>
    
  </form>
  <div className='flex justify-center mt-10'>
      <span className='text-center my-auto text-stone-600 text-sm '>Copy right @Abdul Rehman ❤️</span>

  </div>
</div>

    </>
  )
}
