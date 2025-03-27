# 30 Front-End Assignments for Full-Stack Practice (React Focus)

Practice projects from **easy** to **advanced** with hints to improve logic and React skills.

---

## 🟢 Easy Level (Fundamentals)

### 1. Counter App
- **Task**: Build a counter with increment/decrement buttons.
- **Hint**: Use `useState` to manage the count.
- **Logic**: Simple state update on button click.

### 2. Todo List (Add Only)
- **Task**: Add todos to a list (no deletion).
- **Hint**: Store todos in an array state. Map through them to render.
- **Logic**: Array manipulation with `[...prevTodos, newTodo]`.

### 3. Random Color Generator
- **Task**: Button that changes background color randomly.
- **Hint**: Generate hex color codes like `#${Math.random().toString(16).slice(2, 8)}`.

### 4. Simple Form Validation
- **Task**: Validate email/password input (disable submit if invalid).
- **Hint**: Use regex for validation (`/\S+@\S+\.\S+/` for email).

### 5. Digital Clock
- **Task**: Display live time updating every second.
- **Hint**: `useEffect` with `setInterval` and `new Date().toLocaleTimeString()`.

---

## 🟡 Medium Level (Intermediate Logic)

### 6. Todo List (Full CRUD)
- **Task**: Add, delete, and mark todos as complete.
- **Hint**: Use `filter` to delete, `map` to toggle completion.

### 7. Pagination
- **Task**: Display 10 items per page from a mock API (e.g., JSONPlaceholder).
- **Hint**: Calculate `currentItems = data.slice(startIndex, endIndex)`.

### 8. Search Filter
- **Task**: Filter a list of items (e.g., countries) by user input.
- **Hint**: `items.filter(item => item.toLowerCase().includes(query))`.

### 9. Accordion
- **Task**: Collapsible sections (only one open at a time).
- **Hint**: Track `openIndex` in state; conditionally render content.

### 10. Dark Mode Toggle
- **Task**: Toggle between light/dark themes using CSS variables.
- **Hint**: Change `document.documentElement.style.setProperty('--bg-color', '#333')`.

### 11. BMI Calculator
- **Task**: Calculate BMI from height/weight inputs.
- **Logic**: `weight / (height * height)` (units matter!).

### 12. Countdown Timer
- **Task**: Timer that counts down from a user-set time.
- **Hint**: `useEffect` with `setInterval`; clear on unmount.

### 13. Quiz App (Single Question)
- **Task**: Display a question, track score.
- **Hint**: Shuffle answers array with `.sort(() => 0.5 - Math.random())`.

### 14. Currency Converter
- **Task**: Convert USD to EUR using a fixed rate.
- **Logic**: `amount * exchangeRate`; handle input changes.

### 15. Drag-and-Drop List
- **Task**: Reorder list items with drag-and-drop.
- **Hint**: Use `react-beautiful-dnd` or track mouse events.

---

## 🔴 Advanced Level (Complex Logic)

### 16. Expense Tracker
- **Task**: Add expenses, display totals, and charts.
- **Hint**: Use `reduce` to sum amounts; `react-chartjs-2` for visuals.

### 17. Real-Time Weather App
- **Task**: Fetch weather data from an API (e.g., OpenWeatherMap).
- **Hint**: `fetch` with `useEffect`; handle loading states.

### 18. Multi-Step Form
- **Task**: Form with progress steps (e.g., signup flow).
- **Hint**: Track `currentStep`; conditionally render components.

### 19. Tetris Game
- **Task**: Build a playable Tetris.
- **Logic**: Use a 2D array grid; collision detection.

### 20. Chat App (Frontend Only)
- **Task**: Mock chat interface with message history.
- **Hint**: Store messages in state; auto-scroll to bottom.

### 21. Custom Hook: useFetch
- **Task**: Create a reusable hook for API calls.
- **Hint**: Return `{ data, loading, error }`; use `fetch` inside.

### 22. Redux Shopping Cart
- **Task**: Add/remove items; calculate total.
- **Hint**: Use `useSelector`/`useDispatch`; manage cart state.

### 23. Infinite Scroll
- **Task**: Load more data when scrolling (e.g., posts).
- **Hint**: Use `IntersectionObserver` or `window.scrollY`.

### 24. JWT Auth Flow
- **Task**: Mock login/logout with fake JWT.
- **Hint**: Store token in `localStorage`; context for auth state.

### 25. Websocket Chat
- **Task**: Real-time messaging with `socket.io`.
- **Hint**: Emit/receive events; update state on new messages.

### 26. Code Editor (Syntax Highlighting)
- **Task**: Basic editor with Monaco or Prism.js.
- **Hint**: Use `react-simple-code-editor`.

### 27. Kanban Board
- **Task**: Drag tasks between columns (Todo/Doing/Done).
- **Hint**: Manage column state; use `react-beautiful-dnd`.

### 28. Video Player with Playlist
- **Task**: Custom controls; switch between videos.
- **Hint**: Use `<video>` tag; track current video index.

### 29. Graph Visualization
- **Task**: Render data as a graph (e.g., with D3.js).
- **Hint**: Start with `react-force-graph`.

### 30. AI Image Generator (Mock)
- **Task**: Frontend for a Dall-E-like app (mock API).
- **Hint**: Simulate loading states; display "generated" images.

---

## 💡 General Hints
- **Debugging**: Use `console.log` or React DevTools.
- **Styling**: CSS Modules or Tailwind for quick UI.
- **API Mocking**: Use `json-server` or Mock Service Worker (MSW).
- **Complex State**: Consider `useReducer` or libraries like Zustand.
