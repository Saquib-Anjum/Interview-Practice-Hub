# MERN Stack Developer Practice Questions

## Question 1: JavaScript Fundamentals (60 marks)
**Time: 10 minutes**

You are building a shopping cart application. Implement a `ShoppingCart` class that manages items in a cart. The class should have the following methods:

- `addItem(id, name, price, quantity)` - Add an item to cart
- `removeItem(id)` - Remove an item from cart
- `updateQuantity(id, newQuantity)` - Update item quantity
- `getTotal()` - Calculate total price
- `getItemCount()` - Get total number of items

**Requirements:**
- Use ES6 classes and arrow functions
- Implement proper error handling for invalid inputs
- Use array methods like `find`, `filter`, `reduce`
- Ensure price is always positive and quantity is greater than 0

**Example Usage:**
```javascript
const cart = new ShoppingCart();
cart.addItem(1, "Laptop", 50000, 1);
cart.addItem(2, "Mouse", 1500, 2);
console.log(cart.getTotal()); // Should return 53000
```

---

## Question 2: React Hooks & State Management (60 marks)
**Time: 12 minutes**

Create a React component called `UserProfile` that displays and manages user information. The component should:

- Display user's name, email, and profile picture
- Have an "Edit Profile" button that toggles edit mode
- In edit mode, show input fields for name and email
- Have "Save" and "Cancel" buttons in edit mode
- Use `useState` for managing component state
- Use `useEffect` to simulate API calls
- Implement form validation (name should not be empty, email should be valid format)

**Requirements:**
- Use functional components with hooks
- Implement proper state management
- Handle loading states during "save" operation
- Show success/error messages appropriately

---

## Question 3: Node.js & Express API (60 marks)
**Time: 15 minutes**

Design a RESTful API for a blog application using Express.js. Implement the following endpoints:

- `GET /api/posts` - Get all blog posts
- `GET /api/posts/:id` - Get a specific post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

**Database Schema (posts table):**
```
id: ObjectId
title: String (required)
content: String (required)
author: String (required)
createdAt: Date
updatedAt: Date
tags: Array of Strings
isPublished: Boolean
```

**Requirements:**
- Use proper HTTP status codes
- Implement input validation and error handling
- Use middleware for common functionality
- Include CORS support

---

## Question 4: MongoDB & Mongoose (60 marks)
**Time: 10 minutes**

You are building a e-learning platform. Create Mongoose schemas and implement database operations for the following:

**User Schema:**
- name (required)
- email (unique, required)
- password (required)
- enrolledCourses (array of course IDs)
- createdAt, updatedAt

**Course Schema:**
- title (required)
- description (required)
- instructor (reference to User)
- students (array of User references)
- duration (in hours)
- price (required)
- isActive (boolean, default true)

**Tasks:**
1. Define both schemas with proper validations
2. Implement a function to enroll a user in a course
3. Create a query to find all courses taught by a specific instructor
4. Write an aggregation pipeline to count students per course

---

## Question 5: React Component Communication (60 marks)
**Time: 12 minutes**

Build a Todo List application with the following components:

- `TodoApp` (parent component)
- `TodoForm` (for adding new todos)
- `TodoList` (displays list of todos)
- `TodoItem` (individual todo item)

**Features Required:**
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Filter todos (All, Active, Completed)
- Show total count of active todos

**Requirements:**
- Use props for parent-child communication
- Implement proper state lifting
- Use callback functions for child-to-parent communication
- Handle edge cases (empty list, no active todos, etc.)

---

## Question 6: JavaScript Async Programming (60 marks)
**Time: 10 minutes**

Implement a function called `fetchUserData` that:

1. Takes a user ID as parameter
2. Fetches user basic info from `/api/users/:id`
3. Fetches user posts from `/api/users/:id/posts`
4. Fetches user friends from `/api/users/:id/friends`
5. Returns combined data object

**Requirements:**
- Use async/await syntax
- Handle all API calls concurrently where possible
- Implement proper error handling
- Add timeout functionality (requests should fail after 5 seconds)
- Return null if user doesn't exist, throw error for other failures

**Expected Output:**
```javascript
{
  user: { id, name, email, ... },
  posts: [...],
  friends: [...],
  fetchTime: "timestamp"
}
```

---

## Question 7: React useEffect & Lifecycle (60 marks)
**Time: 10 minutes**

Create a `WeatherWidget` component that:

- Fetches weather data when component mounts
- Updates weather data every 5 minutes
- Allows user to change city
- Shows loading state during API calls
- Handles offline/online status
- Cleans up intervals and event listeners on unmount

**Requirements:**
- Use `useEffect` with different dependency arrays
- Implement cleanup functions
- Handle component unmounting properly
- Use custom hooks if beneficial
- Add error boundaries for error handling

---

## Question 8: Express Middleware & Authentication (60 marks)
**Time: 12 minutes**

Implement authentication middleware for an Express.js application:

1. **JWT Authentication Middleware:**
   - Verify JWT token from request headers
   - Add user info to request object
   - Handle token expiration

2. **Role-based Authorization Middleware:**
   - Check if user has required role (admin, user, moderator)
   - Protect routes based on roles

3. **Rate Limiting Middleware:**
   - Limit requests per IP address
   - Different limits for different endpoints

**Requirements:**
- Use proper error handling and status codes
- Implement token refresh mechanism
- Log security events
- Handle edge cases (missing headers, invalid tokens, etc.)

---

## Question 9: React Context & Global State (60 marks)
**Time: 12 minutes**

Build a theme management system using React Context:

**ThemeContext should provide:**
- Current theme (light/dark)
- Available themes
- Function to switch theme
- Function to add custom theme

**Components to create:**
- `ThemeProvider` (context provider)
- `ThemeToggle` (button to switch themes)
- `ThemedComponent` (component that uses theme)

**Requirements:**
- Persist theme choice in localStorage
- Support custom theme colors
- Provide TypeScript interfaces (if using TS)
- Handle theme loading states
- Make themes configurable via JSON

---

## Question 10: MongoDB Aggregation Pipeline (60 marks)
**Time: 15 minutes**

Given an e-commerce database with collections:

**orders:**
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [{productId: ObjectId, quantity: Number, price: Number}],
  status: String, // "pending", "shipped", "delivered"
  orderDate: Date,
  totalAmount: Number
}
```

**products:**
```javascript
{
  _id: ObjectId,
  name: String,
  category: String,
  price: Number,
  stock: Number
}
```

**Write aggregation pipelines for:**
1. Top 5 selling products by quantity
2. Monthly sales report (total revenue per month)
3. Users with orders above ₹10,000 in last 30 days
4. Category-wise revenue analysis
5. Average order value per user

---

## Question 11: React Performance Optimization (60 marks)
**Time: 10 minutes**

You have a `ProductList` component that renders 1000+ products. Optimize it for better performance:

**Current Issues:**
- Re-renders on every parent state change
- Images load all at once
- Search filtering is slow
- Expensive calculations run on every render

**Optimization Techniques to Implement:**
- Memoization (React.memo, useMemo, useCallback)
- Virtual scrolling or pagination
- Lazy loading for images
- Debounced search
- Code splitting

**Requirements:**
- Implement at least 3 optimization techniques
- Measure and compare performance before/after
- Handle edge cases (empty list, no search results)

---

## Question 12: Node.js File Upload & Processing (60 marks)
**Time: 12 minutes**

Create an API endpoint that handles file uploads with the following features:

1. **Upload endpoint** (`POST /api/upload`)
   - Accept multiple file types (image, pdf, doc)
   - Validate file size (max 5MB per file)
   - Store files with unique names
   - Generate thumbnails for images

2. **File processing:**
   - Compress images automatically
   - Extract metadata from files
   - Scan for viruses (mock implementation)
   - Store file info in database

**Requirements:**
- Use multer for file handling
- Implement proper error handling
- Add progress tracking for large files
- Clean up temporary files
- Return file URLs and metadata

---

## Question 13: React Custom Hooks (60 marks)
**Time: 10 minutes**

Create the following custom hooks:

1. **useLocalStorage(key, initialValue)**
   - Manages localStorage with React state
   - Handles JSON serialization/deserialization
   - Syncs across browser tabs

2. **useApi(url, options)**
   - Handles API calls with loading/error states
   - Supports caching and refetching
   - Handles race conditions

3. **useDebounce(value, delay)**
   - Debounces rapid value changes
   - Useful for search inputs

**Requirements:**
- Handle edge cases and errors
- Make hooks reusable and configurable
- Add TypeScript types if applicable
- Include cleanup for effects

---

## Question 14: Express Error Handling & Logging (60 marks)
**Time: 10 minutes**

Implement a comprehensive error handling system:

1. **Global Error Handler:**
   - Catch all unhandled errors
   - Format error responses consistently
   - Log errors with different severity levels

2. **Custom Error Classes:**
   - ValidationError
   - AuthenticationError
   - NotFoundError
   - DatabaseError

3. **Logging System:**
   - Log requests and responses
   - Log errors with stack traces
   - Rotate log files
   - Send critical errors to monitoring service

**Requirements:**
- Use Winston or similar logging library
- Handle async errors properly
- Don't expose sensitive information
- Include request correlation IDs

---

## Question 15: React Testing (60 marks)
**Time: 15 minutes**

Write comprehensive tests for a `LoginForm` component:

**Component Features:**
- Email and password inputs
- Form validation
- Submit button (disabled when invalid)
- Loading state during submission
- Error message display
- "Remember me" checkbox

**Tests to Write:**
1. Renders all form elements correctly
2. Shows validation errors for invalid inputs
3. Enables submit button when form is valid
4. Calls onSubmit with correct data
5. Shows loading state during submission
6. Displays error messages from API

**Requirements:**
- Use Jest and React Testing Library
- Test user interactions (typing, clicking)
- Mock API calls
- Test accessibility features

---

## Question 16: MongoDB Schema Design (60 marks)
**Time: 12 minutes**

Design schemas for a social media platform:

**Requirements:**
- Users can create posts
- Posts can have comments
- Users can follow other users
- Posts can be liked by users
- Support hashtags and mentions
- Handle privacy settings

**Consider:**
1. Relationship modeling (embedded vs referenced)
2. Indexing strategies
3. Query optimization
4. Scalability concerns
5. Data consistency

**Provide:**
- Schema definitions
- Sample queries
- Index recommendations
- Justification for design choices

---

## Question 17: React Router & Navigation (60 marks)
**Time: 10 minutes**

Build a routing system for a dashboard application:

**Routes Required:**
- `/` - Home page
- `/dashboard` - Main dashboard (protected)
- `/profile` - User profile (protected)
- `/settings` - User settings (protected)
- `/login` - Login page
- `/404` - Not found page

**Features:**
- Protected routes (redirect to login if not authenticated)
- Route guards based on user roles
- Nested routing for dashboard sections
- Breadcrumb navigation
- URL parameter handling
- Programmatic navigation

**Requirements:**
- Use React Router v6
- Implement authentication context
- Handle loading states during route changes
- SEO-friendly URLs

---

## Question 18: Node.js Caching Strategy (60 marks)
**Time: 12 minutes**

Implement caching for a news API:

**Caching Layers:**
1. **In-memory cache** (using node-cache)
   - Cache frequently accessed articles
   - Set TTL based on content type

2. **Redis cache**
   - Cache user sessions
   - Cache expensive database queries
   - Implement cache invalidation

3. **HTTP cache headers**
   - Set appropriate cache headers
   - Handle conditional requests
   - Implement ETags

**Requirements:**
- Cache hit rate monitoring
- Cache warming strategies
- Handle cache misses gracefully
- Implement cache invalidation patterns

---

## Question 19: React Form Handling (60 marks)
**Time: 15 minutes**

Create a complex form component for user registration:

**Form Fields:**
- Personal info (name, email, phone)
- Address (street, city, state, zip)
- Preferences (newsletter, notifications)
- Profile picture upload
- Terms and conditions checkbox

**Features:**
- Multi-step form (wizard)
- Field validation (real-time and on submit)
- Form data persistence across steps
- File upload with preview
- Submit with loading states
- Success/error handling

**Requirements:**
- Use Formik or react-hook-form
- Implement custom validation rules
- Handle form reset and pre-population
- Accessibility compliance

---

## Question 20: Full Stack Integration (60 marks)
**Time: 20 minutes**

Build a real-time chat feature:

**Backend (Node.js + Socket.io):**
- WebSocket connection handling
- Message broadcasting
- User authentication for sockets
- Message persistence in MongoDB
- Typing indicators
- Online user tracking

**Frontend (React):**
- Chat interface with message list
- Real-time message updates
- Typing indicators
- Online user list
- Message composition
- Connection status handling

**Requirements:**
- Handle disconnections gracefully
- Implement message acknowledgments
- Add message timestamps
- Support message history loading
- Handle multiple chat rooms

---

## Evaluation Criteria

Each question will be evaluated based on:
- **Code Quality** (20 points): Clean, readable, maintainable code
- **Functionality** (25 points): Working solution that meets requirements
- **Best Practices** (10 points): Following industry standards and conventions
- **Error Handling** (5 points): Proper error handling and edge cases

**Total Time for all questions: 4 hours**
**Total Marks: 1200**

Good luck with your preparation! 🚀