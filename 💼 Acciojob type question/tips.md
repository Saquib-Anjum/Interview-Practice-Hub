# 15-Minute Speed Coding Guide for MERN Stack Exams

## 🎯 Time Management Strategy

| Phase | Time | Focus |
|-------|------|-------|
| **Planning** | 2 minutes | Read question, identify pattern, mental outline |
| **Core Code** | 10 minutes | Write main functionality using templates |
| **Polish** | 3 minutes | Add validation, error handling, final review |

## ⚡ Speed Writing Tips

### 1. **Memorize Common Imports (Save 30 seconds)**
```javascript
// React
import React, { useState, useEffect } from 'react';

// Express
const express = require('express');
const mongoose = require('mongoose');

// Node.js
const fs = require('fs');
const path = require('path');
```

### 2. **Use Abbreviations**
- `res` → response
- `req` → request  
- `err` → error
- `btn` → button
- `nav` → navigation
- `auth` → authentication

### 3. **Skip Non-Essential Items**
- ❌ Detailed CSS styling
- ❌ Extensive comments
- ❌ Complex animations
- ❌ Multiple loading states
- ✅ Core functionality
- ✅ Basic error handling
- ✅ Input validation

### 4. **Question Pattern Recognition**
| Keywords in Question | Use Template |
|---------------------|--------------|
| "Create API", "REST", "endpoints" | Express API Template |
| "React component", "state", "hooks" | React Component Template |
| "Class", "OOP", "inheritance" | JavaScript Class Template |
| "Database", "schema", "queries" | MongoDB Template |
| "Authentication", "login" | Auth Template |

## 🚀 Ready-to-Use Templates

### Template 1: React Component (3-4 minutes)
```javascript
import React, { useState, useEffect } from 'react';

function ComponentName() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/endpoint');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      await fetch('/api/endpoint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Add your JSX here */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default ComponentName;
```

### Template 2: Express API (4-5 minutes)
```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Schema
const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
const Item = mongoose.model('Item', ItemSchema);

// GET - List all
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Create new
app.post('/api/items', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Update
app.put('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE
app.delete('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running'));
```

### Template 3: JavaScript Class (2-3 minutes)
```javascript
class ClassName {
  constructor(param1, param2) {
    this.property1 = param1;
    this.property2 = param2;
    this.data = [];
  }

  add(item) {
    if (!item) throw new Error('Item is required');
    this.data.push(item);
    return this;
  }

  remove(id) {
    this.data = this.data.filter(item => item.id !== id);
    return this;
  }

  find(id) {
    return this.data.find(item => item.id === id);
  }

  getAll() {
    return [...this.data];
  }

  update(id, updates) {
    const index = this.data.findIndex(item => item.id === id);
    if (index === -1) throw new Error('Item not found');
    this.data[index] = { ...this.data[index], ...updates };
    return this.data[index];
  }
}
```

### Template 4: MongoDB Operations (3-4 minutes)
```javascript
const mongoose = require('mongoose');

// Schema Definition
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 18 },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

// Basic CRUD Operations
const createUser = async (userData) => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (error) {
    throw new Error(`Create failed: ${error.message}`);
  }
};

const getUsers = async (filter = {}) => {
  try {
    return await User.find(filter);
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
};

const updateUser = async (id, updates) => {
  try {
    return await User.findByIdAndUpdate(id, updates, { new: true });
  } catch (error) {
    throw new Error(`Update failed: ${error.message}`);
  }
};

const deleteUser = async (id) => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Delete failed: ${error.message}`);
  }
};

// Aggregation Pipeline Example
const getUserStats = async () => {
  return await User.aggregate([
    { $group: { _id: null, totalUsers: { $sum: 1 }, avgAge: { $avg: '$age' } } },
    { $project: { _id: 0, totalUsers: 1, avgAge: { $round: ['$avgAge', 2] } } }
  ]);
};
```

### Template 5: React Form with Hooks (4-5 minutes)
```javascript
import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      alert('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
      </div>
      
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />
      </div>
      
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

export default FormComponent;
```

## 🔥 Quick Code Snippets (Copy-Paste Ready)

### Authentication Middleware (1 minute)
```javascript
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token required' });
  // Add token verification logic
  next();
};
```

### Error Handler (30 seconds)
```javascript
const handleError = (res, error, status = 500) => {
  console.error(error);
  res.status(status).json({ error: error.message || 'Something went wrong' });
};
```

### Validation Function (1 minute)
```javascript
const validate = (data, rules) => {
  const errors = {};
  Object.keys(rules).forEach(key => {
    if (rules[key].required && !data[key]) {
      errors[key] = `${key} is required`;
    }
  });
  return Object.keys(errors).length ? errors : null;
};
```

### React Custom Hook (2 minutes)
```javascript
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};
```

## 📝 Example: Complete 15-Minute Solution

**Question:** "Create a Todo List API with React frontend"

### Time Breakdown:
- **0-2 min:** Plan (Express API + React component)
- **2-7 min:** Write Express routes
- **7-12 min:** Write React component
- **12-15 min:** Add validation and error handling

### Solution:
```javascript
// ============ BACKEND (Express API) ============
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});
const Todo = mongoose.model('Todo', TodoSchema);

app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/todos', async (req, res) => {
  try {
    if (!req.body.text) return res.status(400).json({ error: 'Text required' });
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running'));

// ============ FRONTEND (React Component) ============
import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      });
      const newTodo = await res.json();
      setTodos([newTodo, ...todos]);
      setInput('');
    } catch (error) {
      console.error('Error adding todo:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t._id === id);
      const res = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !todo.completed })
      });
      const updatedTodo = await res.json();
      setTodos(todos.map(t => t._id === id ? updatedTodo : t));
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`/api/todos/${id}`, { method: 'DELETE' });
      setTodos(todos.filter(t => t._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo..."
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo} disabled={loading}>
          {loading ? 'Adding...' : 'Add'}
        </button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo._id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
```

## 🎯 Practice Routine

### Daily Practice (10 minutes)
1. **Day 1-3:** Practice typing templates without looking
2. **Day 4-6:** Solve simple questions using templates
3. **Day 7-10:** Time yourself on medium questions
4. **Day 11+:** Practice complex questions under 15 minutes

### Mock Timer Sessions
- Set 15-minute timer
- Pick random question from your list
- Code complete solution
- Review and optimize approach

### Muscle Memory Exercises
- Type common imports 10 times
- Write basic API routes 5 times
- Create React components 5 times
- Practice error handling patterns

## 🏆 Success Checklist

Before Exam:
- [ ] Can write Express API in 5 minutes
- [ ] Can create React component in 4 minutes
- [ ] Know all common imports by heart
- [ ] Can implement basic CRUD in 10 minutes
- [ ] Have practiced 20+ questions under time limit

During Exam:
- [ ] Read question completely first
- [ ] Identify pattern quickly
- [ ] Start with template
- [ ] Focus on core functionality
- [ ] Add validation last
- [ ] Review code before submitting

Remember: **Speed comes with practice!** 🚀

Good luck bhai! 💪