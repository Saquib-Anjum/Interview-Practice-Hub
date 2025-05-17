import React from 'react'
import { useState } from 'react';
import { X, CheckCircle, Circle } from 'lucide-react';
const TODOAPP = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: true },
        { id: 2, text: 'Build a todo app', completed: false },
        { id: 3, text: 'Deploy to production', completed: false },
      ]);
      const [newTodo, setNewTodo] = useState('');
    
      // Add a new todo item
      const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === '') return;
        
        const newItem = {
          id: Date.now(),
          text: newTodo,
          completed: false
        };
        
        setTodos([...todos, newItem]);
        setNewTodo('');
      };
    
      // Toggle todo completion status
      const toggleTodo = (id) => {
        setTodos(
          todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    
      // Delete a todo item
      const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
      };
    
      // Calculate statistics
      const completedCount = todos.filter(todo => todo.completed).length;
      const totalCount = todos.length;
      return (
        <div className="max-w-md mt-20 mx-auto p-6 bg-clip-padding backdrop-filter backdrop-blur-lg   text-white bg-opacity-100">
         
          
          {/* Todo Statistics */}
          <div className="mb-4 text-sm text-gray-600">
            <p>
              {totalCount === 0 
                ? "No tasks yet" 
                : `${completedCount} of ${totalCount} tasks completed`}
            </p>
          </div>
    
          {/* Add Todo Form */}
          <form onSubmit={addTodo} className="mb-6">
            <div className="flex">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task..."
                className="flex-grow px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Add
              </button>
            </div>
          </form>
    
          {/* Todo List */}
          <ul className="space-y-2">
            {todos.length === 0 ? (
              <li className="text-gray-100 text-center py-4">Your todo list is empty!</li>
            ) : (
              todos.map(todo => (
                <li 
                  key={todo.id} 
                  className={`flex items-center justify-between p-3 border rounded ${
                    todo.completed ? 'bg-gray-50' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <button 
                      onClick={() => toggleTodo(todo.id)}
                      className="mr-2 text-gray-200 hover:text-blue-500 focus:outline-none"
                    >
                      {todo.completed ? 
                        <CheckCircle className="text-green-500" size={20} /> : 
                        <Circle size={20} />
                      }
                    </button>
                    <span 
                      className={`${
                        todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button 
                    onClick={() => deleteTodo(todo.id)} 
                    className="text-gray-400 hover:text-red-500 focus:outline-none"
                  >
                    <X size={18} />
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      );
}

export default TODOAPP
