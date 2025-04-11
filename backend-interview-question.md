# ✅ Node.js Developer - Detailed Interview Answers

---

## 1. **What is the event loop in Node.js and how does it work?**
> The event loop is a mechanism in Node.js that handles asynchronous operations. Node.js performs non-blocking I/O using the event loop and a worker pool (libuv). When a task is completed, its callback is pushed to the callback queue and the event loop picks it up to execute.

---

## 2. **What are streams and how are they different from buffers in Node.js?**
> Buffers hold the entire data in memory before processing, while Streams process data chunk by chunk. Streams are more memory efficient and ideal for large files.

---

## 3. **Explain the difference between `process.nextTick()` and `setImmediate()`.**
> - `process.nextTick()` runs its callback before the event loop continues.
> - `setImmediate()` schedules the callback to run in the next event loop iteration.

---

## 4. **How does Node.js handle asynchronous operations under the hood?**
> Node.js uses the libuv library to handle asynchronous tasks. It delegates tasks to OS or thread pool and then processes their callbacks through the event loop.

---

## 5. **How would you create a simple HTTP server without Express?**
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
});
server.listen(3000);
```

---

## 6. **How do middlewares work in Express? Can you create a custom middleware?**
> Middlewares are functions with access to `req`, `res`, and `next()`. They are used for tasks like logging, auth, etc.
```js
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
```

---

## 7. **What is the difference between `app.use()` and `app.get()` in Express?**
> - `app.use()` handles all types of HTTP methods and applies middleware.
> - `app.get()` only handles GET requests for a specified route.

---

## 8. **How do you structure large Express applications?**
> Use folders for separation:
```
project/
├── routes/
├── controllers/
├── models/
├── middleware/
├── utils/
└── app.js
```

---

## 9. **Explain how to handle errors globally in an Express app.**
```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});
```

---

## 10. **What are CORS issues and how do you handle them in Express?**
> CORS errors occur when requests are made from different domains. Use `cors` middleware:
```js
const cors = require('cors');
app.use(cors());
```

---

## 11. **What is the difference between `.find()` and `.findOne()` in Mongoose?**
> - `.find()` returns an array of documents.
> - `.findOne()` returns a single document or `null`.

---

## 12. **How do you define relationships (refs) between collections using Mongoose?**
```js
const blogSchema = new Schema({
  title: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});
```

---

## 13. **What are virtuals in Mongoose and how do they work?**
> Virtuals are computed properties not stored in the database.
```js
userSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
});
```

---

## 14. **How do you perform validations in Mongoose models?**
```js
const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, min: 18 }
});
```

---

## 15. **What’s the difference between `lean()` and not using `lean()` in queries?**
> - `.lean()` returns plain JavaScript objects.
> - Without `.lean()`, Mongoose returns full documents with getters, setters, and methods.

---

## 16. **How does JWT authentication work?**
> Server signs a token on login. Client stores it and sends it in headers. Server verifies it using a secret key.

---

## 17. **How do you securely store passwords in the database?**
> Use `bcrypt` to hash passwords before saving them:
```js
const bcrypt = require('bcrypt');
const hashed = await bcrypt.hash(password, 10);
```

---

## 18. **What are some ways to secure a Node.js API in production?**
- Use Helmet
- Use CORS properly
- Input validation
- Sanitize data
- Rate limiting
- Disable detailed errors

---

## 19. **How do you deploy a Node.js app to Render/Railway?**
1. Push to GitHub
2. Connect your repo to Render/Railway
3. Set environment variables
4. Define `start` command
5. Deploy

---

## 20. **What is PM2 and why would you use it in production?**
> PM2 is a process manager for Node.js apps. It ensures app stays online, supports clustering, and provides logging.

---

## Bonus Resources
- [Node.js Docs](https://nodejs.org/en/docs)
- [Express.js Docs](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [JWT Intro](https://jwt.io/introduction)
- [PM2 Docs](https://pm2.keymetrics.io/)

