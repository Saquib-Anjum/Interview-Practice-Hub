# Backend Development Assignments (Node.js + Express.js)

Here are **20 assignments** to help you practice and build confidence in backend development using **Node.js** and **Express.js**. These assignments cover a wide range of concepts, from basic to intermediate.

---

## **Basic Assignments**

### **1. Hello World API**
- Create a simple Express server that responds with `"Hello, World!"` when a GET request is made to the root (`/`) endpoint.
- **Skills Practiced**: Basic Express setup, routing, and sending responses.

---

### **2. Simple Calculator API**
- Build an API that performs basic arithmetic operations (addition, subtraction, multiplication, division).
- Use query parameters to pass numbers and the operation to perform.
  - Example: `/calculate?num1=10&num2=5&operation=add` should return `15`.
- **Skills Practiced**: Query parameters, conditional logic, and response handling.

---

### **3. User Registration API**
- Create an API that accepts user details (name, email, password) via a POST request and stores them in an array (in-memory storage).
- Return a success message with the user details.
- **Skills Practiced**: Handling POST requests, request body parsing, and in-memory data storage.

---

### **4. Middleware Practice**
- Create a middleware that logs the request method, URL, and timestamp for every incoming request.
- Use this middleware in your Express app.
- **Skills Practiced**: Middleware creation and usage.

---

### **5. File Upload API**
- Build an API that allows users to upload a file (e.g., an image) and save it to a folder on the server.
- Return a success message with the file details.
- **Skills Practiced**: File handling, Multer middleware, and file storage.

---

### **6. CRUD API for Todos**
- Create a simple CRUD (Create, Read, Update, Delete) API for managing a list of todos.
- Use an array to store todos in memory.
- Endpoints:
  - `POST /todos` - Add a new todo.
  - `GET /todos` - Get all todos.
  - `PUT /todos/:id` - Update a todo by ID.
  - `DELETE /todos/:id` - Delete a todo by ID.
- **Skills Practiced**: CRUD operations, routing, and request handling.

---

### **7. Authentication API (Basic)**
- Create a simple authentication system where users can:
  - Register with a username and password.
  - Login with their credentials.
- Use a hardcoded array to store users and passwords (for now).
- Return a success message or error based on the login attempt.
- **Skills Practiced**: Authentication logic, password hashing (use `bcrypt`), and response handling.

---

### **8. Environment Variables**
- Create an API that uses environment variables to store sensitive data (e.g., API keys, database credentials).
- Use the `dotenv` package to load environment variables from a `.env` file.
- Return a response that includes a value from the environment variables.
- **Skills Practiced**: Environment variable management and security best practices.

---

### **9. Error Handling**
- Enhance your existing APIs to handle errors gracefully.
  - Return a 404 status for invalid routes.
  - Return a 500 status for server errors.
  - Return a 400 status for bad requests (e.g., missing required fields).
- **Skills Practiced**: Error handling middleware and HTTP status codes.

---

### **10. Connect to a Database**
- Create a simple API that connects to a database (e.g., MongoDB or MySQL).
- Perform basic CRUD operations on a collection/table (e.g., `users`).
- Use an ORM/ODM like Mongoose (for MongoDB) or Sequelize (for MySQL).
- **Skills Practiced**: Database connection, ORM/ODM usage, and CRUD operations with a database.

---

## **Intermediate Assignments**

### **11. Pagination API**
- Create an API that returns paginated data (e.g., a list of users or products).
- Use query parameters like `page` and `limit` to control the pagination.
- Example: `/users?page=1&limit=10` should return the first 10 users.
- **Skills Practiced**: Pagination logic and query parameter handling.

---

### **12. Search and Filter API**
- Build an API that allows users to search and filter data (e.g., products or todos).
- Use query parameters for search and filter options.
  - Example: `/products?search=laptop&category=electronics&minPrice=500`.
- **Skills Practiced**: Query parameter handling and filtering logic.

---

### **13. Rate Limiting**
- Implement rate limiting for your API to prevent abuse.
- Use a middleware like `express-rate-limit` to limit the number of requests per user.
- Example: Allow only 100 requests per hour per IP address.
- **Skills Practiced**: Rate limiting and middleware usage.

---

### **14. JWT Authentication**
- Implement JWT (JSON Web Token) based authentication for your API.
- Allow users to register, login, and access protected routes using JWT.
- **Skills Practiced**: JWT implementation, authentication, and authorization.

---

### **15. File Download API**
- Create an API that allows users to download files (e.g., images or documents) stored on the server.
- Use the `res.download()` method in Express to send the file.
- **Skills Practiced**: File handling and response methods.

---

### **16. API Versioning**
- Implement API versioning in your Express app.
- Use route prefixes like `/api/v1` and `/api/v2` to manage different versions of your API.
- **Skills Practiced**: API versioning and route organization.

---

### **17. Caching with Redis**
- Integrate Redis to cache API responses and improve performance.
- Example: Cache the response of a frequently accessed endpoint (e.g., `/products`).
- **Skills Practiced**: Redis integration and caching strategies.

---

### **18. WebSocket Integration**
- Add WebSocket support to your Express app using a library like `socket.io`.
- Create a simple real-time chat application.
- **Skills Practiced**: WebSocket integration and real-time communication.

---

### **19. Unit Testing**
- Write unit tests for your API endpoints using a testing framework like `Jest` or `Mocha`.
- Test all CRUD operations and edge cases.
- **Skills Practiced**: Unit testing and test-driven development (TDD).

---

### **20. Dockerize Your Application**
- Dockerize your Node.js and Express application.
- Create a `Dockerfile` and use Docker Compose to run your app with a database (e.g., MongoDB).
- **Skills Practiced**: Docker, containerization, and deployment.

---

## **Bonus Tips**
- Use **Postman** to test your APIs.
- Write clean and modular code (e.g., separate routes, controllers, and models).
- Use **Git** to version control your projects.
- Document your APIs using tools like **Swagger** or **Postman**.

---

Feel free to reach out if you need help with any of these assignments! 😊
