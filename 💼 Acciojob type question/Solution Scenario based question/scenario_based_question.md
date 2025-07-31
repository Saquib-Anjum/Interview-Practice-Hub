# 🧠 Full-Stack Developer Interview Questions – Real World Scenarios

> A comprehensive collection of real-world coding challenges that test full-stack development skills across various domains.

---

## 📦 Question 1: E-commerce - Add to Cart API

**Scenario**: Design an API where users can add products to their cart with proper validation and inventory management.

- **Endpoint**: `POST /api/cart`
- **Input**: 
  ```json
  {
    "userId": "USER_ID_HERE",
    "productId": "PRODUCT_ID_HERE",
    "quantity": 2
  }
  ```

**Tasks:**
- ✅ Validate product and user existence
- ✅ Check product inventory before adding
- ✅ If item exists in cart, increase quantity
- ✅ If not, add new cart item
- ✅ Return updated cart with total count

**Expected Response:**
```json
{
  "success": true,
  "message": "Product added to cart",
  "cartItems": 5,
  "totalAmount": 1299.99
}
```

---

## 🏦 Question 2: Banking - Money Transfer API

**Scenario**: Build a secure money transfer system between bank accounts with transaction logging.

- **Endpoint**: `POST /api/transfer`
- **Input**:
  ```json
  {
    "fromAccountId": "ACC001",
    "toAccountId": "ACC002",
    "amount": 1000,
    "description": "Payment for services"
  }
  ```

**Tasks:**
- ✅ Validate sufficient balance in sender's account
- ✅ Use database transactions for atomic operations
- ✅ Update both account balances
- ✅ Create transaction history record
- ✅ Send notification to both parties

**Database Schema:**
```sql
accounts: id, userId, balance, accountNumber
transactions: id, fromAccount, toAccount, amount, status, createdAt
```

---

## 🏥 Question 3: Healthcare - Patient Appointment System

**Scenario**: Create an appointment booking system for a medical clinic with doctor availability.

- **Endpoint**: `POST /api/appointments`
- **Input**:
  ```json
  {
    "patientId": "PAT123",
    "doctorId": "DOC456",
    "appointmentDate": "2025-08-15",
    "timeSlot": "10:00 AM",
    "reason": "Regular checkup"
  }
  ```

**Tasks:**
- ✅ Check doctor availability for the time slot
- ✅ Prevent double booking
- ✅ Send confirmation email to patient
- ✅ Add to doctor's schedule
- ✅ Generate appointment ID

**Additional Features:**
- 📅 Get available time slots: `GET /api/doctors/:id/availability`
- 🔄 Reschedule appointment: `PUT /api/appointments/:id`

---

## 🎓 Question 4: Education - Student Grade Management

**Scenario**: Build a system to manage student grades and calculate GPAs automatically.

- **Endpoint**: `POST /api/grades`
- **Input**:
  ```json
  {
    "studentId": "STU789",
    "courseId": "CSE101",
    "assignmentType": "exam",
    "score": 85,
    "maxScore": 100,
    "weight": 0.3
  }
  ```

**Tasks:**
- ✅ Calculate percentage and letter grade
- ✅ Update student's course average
- ✅ Recalculate overall GPA
- ✅ Check if student passes the course
- ✅ Generate grade report

**Grade Calculation Logic:**
```javascript
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: Below 60
const calculateGPA = (grades) => {
  const gradePoints = { A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0 };
  // Implementation here
};
```

---

## 🏨 Question 5: Hotel Management - Room Booking System

**Scenario**: Create a hotel reservation system with room availability checking.

- **Endpoint**: `POST /api/bookings`
- **Input**:
  ```json
  {
    "guestId": "GUEST123",
    "roomType": "deluxe",
    "checkIn": "2025-08-20",
    "checkOut": "2025-08-25",
    "guests": 2
  }
  ```

**Tasks:**
- ✅ Check room availability for date range
- ✅ Calculate total cost including taxes
- ✅ Reserve the room
- ✅ Generate booking confirmation
- ✅ Send confirmation email with booking details

**Room Availability Logic:**
```sql
SELECT * FROM rooms 
WHERE room_type = 'deluxe' 
AND id NOT IN (
  SELECT room_id FROM bookings 
  WHERE check_out > '2025-08-20' 
  AND check_in < '2025-08-25'
);
```

---

## 🚗 Question 6: Ride Sharing - Driver Matching Algorithm

**Scenario**: Build a ride-hailing system that matches passengers with nearby drivers.

- **Endpoint**: `POST /api/ride-request`
- **Input**:
  ```json
  {
    "passengerId": "PASS456",
    "pickupLocation": {
      "lat": 40.7128,
      "lng": -74.0060
    },
    "destination": {
      "lat": 40.7589,
      "lng": -73.9851
    },
    "rideType": "standard"
  }
  ```

**Tasks:**
- ✅ Find available drivers within 5km radius
- ✅ Calculate estimated fare and time
- ✅ Sort drivers by distance and rating
- ✅ Send ride request to nearest driver
- ✅ Handle driver acceptance/rejection

**Distance Calculation:**
```javascript
const calculateDistance = (lat1, lng1, lat2, lng2) => {
  // Haversine formula implementation
  const R = 6371; // Earth's radius in km
  // Formula here...
};
```

---

## 📧 Question 7: Email Marketing - Campaign Management

**Scenario**: Create an email campaign system with subscriber management and analytics.

- **Endpoint**: `POST /api/campaigns`
- **Input**:
  ```json
  {
    "name": "Summer Sale 2025",
    "subject": "50% Off Everything!",
    "content": "<html>Email template here</html>",
    "scheduledAt": "2025-08-01T09:00:00Z",
    "subscriberSegment": "premium_users"
  }
  ```

**Tasks:**
- ✅ Create campaign record
- ✅ Queue emails for scheduled sending
- ✅ Track email opens and clicks
- ✅ Handle unsubscribe requests
- ✅ Generate campaign analytics

**Analytics Dashboard:**
```json
{
  "campaignId": "CAMP123",
  "totalSent": 10000,
  "opened": 3500,
  "clicked": 750,
  "unsubscribed": 25,
  "openRate": "35%",
  "clickRate": "7.5%"
}
```

---

## 🏃‍♂️ Question 8: Fitness Tracking - Workout Logger

**Scenario**: Build a fitness app that tracks workouts and calculates calories burned.

- **Endpoint**: `POST /api/workouts`
- **Input**:
  ```json
  {
    "userId": "USER789",
    "workoutType": "running",
    "duration": 45,
    "distance": 5.2,
    "heartRate": 145,
    "notes": "Morning jog in the park"
  }
  ```

**Tasks:**
- ✅ Calculate calories burned based on user profile
- ✅ Update user's fitness statistics
- ✅ Check if personal records were broken
- ✅ Generate workout summary
- ✅ Update weekly/monthly progress

**Calorie Calculation:**
```javascript
const calculateCalories = (activity, duration, weight, intensity) => {
  const MET_VALUES = {
    running: 8.0,
    cycling: 6.0,
    swimming: 7.0,
    walking: 3.5
  };
  return (MET_VALUES[activity] * weight * duration) / 60;
};
```

---

## 🍕 Question 9: Food Delivery - Order Tracking System

**Scenario**: Create a real-time order tracking system for food delivery.

- **Endpoint**: `POST /api/orders`
- **Input**:
  ```json
  {
    "customerId": "CUST456",
    "restaurantId": "REST123",
    "items": [
      {
        "itemId": "PIZZA001",
        "quantity": 2,
        "customizations": ["extra cheese", "no onions"]
      }
    ],
    "deliveryAddress": "123 Main St, New York, NY"
  }
  ```

**Tasks:**
- ✅ Calculate order total with taxes and delivery fee
- ✅ Send order to restaurant
- ✅ Assign delivery driver
- ✅ Provide real-time tracking updates
- ✅ Send notifications at each status change

**Order Status Flow:**
```
Placed → Confirmed → Preparing → Ready → Picked Up → Delivered
```

---

## 🎮 Question 10: Gaming - Leaderboard System

**Scenario**: Build a competitive gaming leaderboard with ranking algorithms.

- **Endpoint**: `POST /api/game-score`
- **Input**:
  ```json
  {
    "playerId": "PLAYER123",
    "gameId": "GAME456",
    "score": 15750,
    "gameMode": "ranked",
    "matchDuration": 420
  }
  ```

**Tasks:**
- ✅ Update player's best score
- ✅ Recalculate leaderboard rankings
- ✅ Award achievements if milestones reached
- ✅ Update player statistics
- ✅ Notify friends of new high score

**Leaderboard API:**
```javascript
// GET /api/leaderboard?game=GAME456&mode=ranked&limit=100
{
  "rankings": [
    {
      "rank": 1,
      "playerId": "PLAYER789",
      "username": "ProGamer2025",
      "score": 98500,
      "gamesPlayed": 150
    }
  ]
}
```

---

## 🏠 Question 11: Real Estate - Property Search

**Scenario**: Create a property search system with filters and geolocation.

- **Endpoint**: `GET /api/properties/search`
- **Query Parameters**:
  ```
  ?minPrice=100000&maxPrice=500000&bedrooms=3&location=40.7128,-74.0060&radius=10
  ```

**Tasks:**
- ✅ Implement advanced filtering (price, bedrooms, bathrooms, type)
- ✅ Add geolocation-based search
- ✅ Sort by price, date, distance
- ✅ Implement pagination
- ✅ Save search preferences for users

**Response Format:**
```json
{
  "properties": [
    {
      "id": "PROP123",
      "title": "Beautiful 3BR Apartment",
      "price": 450000,
      "bedrooms": 3,
      "bathrooms": 2,
      "sqft": 1200,
      "images": ["url1", "url2"],
      "distance": "2.3 km from search center"
    }
  ],
  "totalCount": 245,
  "currentPage": 1
}
```

---

## 📱 Question 12: Social Media - News Feed Algorithm

**Scenario**: Build a personalized news feed system with engagement tracking.

- **Endpoint**: `GET /api/feed`
- **Input**: User ID via authentication

**Tasks:**
- ✅ Fetch posts from followed users
- ✅ Apply engagement-based ranking algorithm
- ✅ Include sponsored content
- ✅ Track post views and interactions
- ✅ Implement infinite scroll pagination

**Feed Algorithm:**
```javascript
const calculatePostScore = (post, user) => {
  let score = 0;
  
  // Recency (newer posts get higher score)
  const hoursSincePost = (Date.now() - post.createdAt) / (1000 * 60 * 60);
  score += Math.max(0, 100 - hoursSincePost);
  
  // Engagement (likes, comments, shares)
  score += post.likes * 2 + post.comments * 3 + post.shares * 5;
  
  // User relationship strength
  score += getUserRelationshipScore(user.id, post.authorId);
  
  return score;
};
```

---

## 💰 Question 13: Cryptocurrency - Wallet Management

**Scenario**: Create a cryptocurrency wallet with transaction history and balance tracking.

- **Endpoint**: `POST /api/crypto/send`
- **Input**:
  ```json
  {
    "fromWalletId": "WALLET123",
    "toAddress": "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    "amount": 0.5,
    "currency": "BTC",
    "pin": "1234"
  }
  ```

**Tasks:**
- ✅ Validate wallet PIN/password
- ✅ Check sufficient balance
- ✅ Validate recipient address format
- ✅ Calculate transaction fees
- ✅ Create blockchain transaction
- ✅ Update wallet balances

**Security Features:**
```javascript
const validateTransaction = async (transaction) => {
  // Multi-factor authentication
  // Rate limiting for large amounts
  // Fraud detection algorithms
  // Address whitelist checking
};
```

---

## 📊 Question 14: Analytics Dashboard - Data Visualization

**Scenario**: Build an analytics API that processes large datasets and returns visualization data.

- **Endpoint**: `GET /api/analytics/dashboard`
- **Query Parameters**:
  ```
  ?metric=revenue&period=30d&groupBy=day&compare=previous
  ```

**Tasks:**
- ✅ Aggregate data from multiple sources
- ✅ Apply date range filtering
- ✅ Calculate growth percentages
- ✅ Return data optimized for charts
- ✅ Cache expensive queries

**Response Structure:**
```json
{
  "metrics": {
    "totalRevenue": 125000,
    "growth": "+15.3%",
    "chartData": [
      { "date": "2025-07-01", "value": 4200 },
      { "date": "2025-07-02", "value": 3800 }
    ]
  },
  "comparison": {
    "previousPeriod": 108650,
    "change": 16350
  }
}
```

---

## 🎵 Question 15: Music Streaming - Playlist Management

**Scenario**: Create a music streaming service with smart playlist generation.

- **Endpoint**: `POST /api/playlists`
- **Input**:
  ```json
  {
    "userId": "USER456",
    "name": "Workout Mix",
    "description": "High energy songs for gym",
    "isPublic": true,
    "songs": ["SONG123", "SONG456", "SONG789"],
    "autoGenerate": {
      "genre": "electronic",
      "mood": "energetic",
      "duration": 60
    }
  }
  ```

**Tasks:**
- ✅ Create playlist with basic info
- ✅ Add specified songs
- ✅ Auto-generate additional songs based on criteria
- ✅ Calculate total playlist duration
- ✅ Set appropriate privacy settings

**Auto-Generation Algorithm:**
```javascript
const generatePlaylist = async (criteria) => {
  const songs = await Song.find({
    genre: criteria.genre,
    energy_level: { $gte: 7 },
    duration: { $lte: 300 }
  })
  .sort({ popularity: -1 })
  .limit(20);
  
  return shuffleArray(songs);
};
```

---

## 🚛 Question 16: Logistics - Package Tracking

**Scenario**: Build a package tracking system with route optimization.

- **Endpoint**: `POST /api/shipments`
- **Input**:
  ```json
  {
    "senderId": "SENDER123",
    "recipientId": "RECIPIENT456",
    "packageDetails": {
      "weight": 2.5,
      "dimensions": "30x20x15",
      "value": 150,
      "fragile": true
    },
    "priority": "express"
  }
  ```

**Tasks:**
- ✅ Generate unique tracking number
- ✅ Calculate shipping cost based on weight/distance
- ✅ Determine optimal delivery route
- ✅ Create tracking events
- ✅ Send notifications to sender and recipient

**Tracking Events:**
```javascript
const trackingStates = [
  'Package received',
  'In transit to sorting facility',
  'Arrived at sorting facility',
  'Out for delivery',
  'Delivered'
];
```

---

## 🛒 Question 17: Inventory Management - Stock Control

**Scenario**: Create an inventory management system with automatic reorder alerts.

- **Endpoint**: `PUT /api/inventory/:productId`
- **Input**:
  ```json
  {
    "operation": "sale",
    "quantity": 5,
    "location": "WAREHOUSE_A",
    "orderId": "ORDER789"
  }
  ```

**Tasks:**
- ✅ Update stock levels
- ✅ Check for low stock alerts
- ✅ Create stock movement history
- ✅ Trigger automatic reorder if below threshold
- ✅ Update product availability status

**Reorder Logic:**
```javascript
const checkReorderPoint = async (productId) => {
  const product = await Product.findById(productId);
  const currentStock = product.currentStock;
  const reorderPoint = product.minStock;
  
  if (currentStock <= reorderPoint) {
    await createPurchaseOrder(productId, product.orderQuantity);
  }
};
```

---

## 🎫 Question 18: Event Management - Ticket Booking

**Scenario**: Build an event ticketing system with seat selection and payment processing.

- **Endpoint**: `POST /api/bookings`
- **Input**:
  ```json
  {
    "eventId": "EVENT123",
    "userId": "USER456",
    "tickets": [
      {
        "category": "VIP",
        "quantity": 2,
        "seatNumbers": ["A1", "A2"]
      }
    ],
    "paymentMethod": "card",
    "promoCode": "EARLY20"
  }
  ```

**Tasks:**
- ✅ Check seat availability
- ✅ Apply promotional discounts
- ✅ Reserve seats temporarily (10 minutes)
- ✅ Process payment
- ✅ Generate e-tickets with QR codes

**Seat Reservation System:**
```javascript
const reserveSeats = async (eventId, seatNumbers, userId) => {
  const session = await mongoose.startSession();
  
  try {
    await session.withTransaction(async () => {
      // Check availability and reserve seats atomically
      const seats = await Seat.find({
        eventId,
        seatNumber: { $in: seatNumbers },
        status: 'available'
      }).session(session);
      
      if (seats.length !== seatNumbers.length) {
        throw new Error('Some seats are no longer available');
      }
      
      await Seat.updateMany(
        { _id: { $in: seats.map(s => s._id) } },
        { status: 'reserved', reservedBy: userId, reservedAt: new Date() },
        { session }
      );
    });
  } finally {
    await session.endSession();
  }
};
```

---

## 🏭 Question 19: Manufacturing - Production Planning

**Scenario**: Create a production planning system that schedules manufacturing orders.

- **Endpoint**: `POST /api/production/schedule`
- **Input**:
  ```json
  {
    "productId": "PROD123",
    "quantity": 1000,
    "priority": "high",
    "dueDate": "2025-08-30",
    "customerId": "CUSTOMER456",
    "specifications": {
      "color": "blue",
      "size": "large",
      "material": "cotton"
    }
  }
  ```

**Tasks:**
- ✅ Check raw material availability
- ✅ Calculate production time required
- ✅ Schedule on available production lines
- ✅ Reserve necessary resources
- ✅ Generate production work orders

**Resource Planning:**
```javascript
const scheduleProduction = async (order) => {
  // Check material requirements
  const materials = await calculateMaterialNeeds(order);
  
  // Find available production line
  const productionLine = await findAvailableLine(
    order.dueDate,
    order.estimatedTime
  );
  
  // Create production schedule
  const schedule = await ProductionSchedule.create({
    orderId: order.id,
    lineId: productionLine.id,
    startTime: productionLine.nextAvailable,
    estimatedCompletion: calculateCompletionTime(
      productionLine.nextAvailable,
      order.estimatedTime
    )
  });
  
  return schedule;
};
```

---

## 🌡️ Question 20: IoT - Smart Home Automation

**Scenario**: Build a smart home system that manages IoT devices and creates automation rules.

- **Endpoint**: `POST /api/automation/rules`
- **Input**:
  ```json
  {
    "userId": "USER123",
    "name": "Evening Routine",
    "trigger": {
      "type": "time",
      "value": "18:00"
    },
    "conditions": [
      {
        "deviceId": "MOTION_SENSOR_1",
        "property": "occupancy",
        "operator": "equals",
        "value": true
      }
    ],
    "actions": [
      {
        "deviceId": "SMART_LIGHTS_1",
        "action": "turnOn",
        "parameters": { "brightness": 70, "color": "warm_white" }
      },
      {
        "deviceId": "THERMOSTAT_1",
        "action": "setTemperature",
        "parameters": { "temperature": 22 }
      }
    ]
  }
  ```

**Tasks:**
- ✅ Validate device compatibility
- ✅ Create automation rule
- ✅ Set up trigger monitoring
- ✅ Execute actions when conditions are met
- ✅ Log automation events for debugging

**Device Communication:**
```javascript
const executeAutomation = async (rule) => {
  // Check all conditions
  const conditionsMet = await Promise.all(
    rule.conditions.map(async (condition) => {
      const device = await IoTDevice.findById(condition.deviceId);
      const currentValue = await device.getCurrentValue(condition.property);
      
      return evaluateCondition(currentValue, condition.operator, condition.value);
    })
  );
  
  if (conditionsMet.every(met => met)) {
    // Execute all actions
    await Promise.all(
      rule.actions.map(action => executeDeviceAction(action))
    );
    
    // Log successful execution
    await AutomationLog.create({
      ruleId: rule.id,
      executedAt: new Date(),
      status: 'success'
    });
  }
};
```

---

## 🚀 Bonus Tips for Implementation

### Database Design Considerations
- **Indexing**: Add indexes on frequently queried fields
- **Relationships**: Use appropriate foreign keys and constraints
- **Normalization**: Balance between normalization and query performance
- **Soft Deletes**: Implement soft deletion for important records

### Security Best Practices
- **Authentication**: Use JWT tokens with proper expiration
- **Authorization**: Implement role-based access control
- **Input Validation**: Sanitize and validate all inputs
- **Rate Limiting**: Prevent API abuse
- **HTTPS**: Always use encrypted connections

### Performance Optimization
- **Caching**: Use Redis for frequently accessed data
- **Pagination**: Implement cursor-based pagination for large datasets
- **Database Queries**: Optimize N+1 queries with proper joins
- **CDN**: Use Content Delivery Networks for static assets

### Testing Strategy
- **Unit Tests**: Test individual functions and methods
- **Integration Tests**: Test API endpoints and database interactions
- **Load Testing**: Ensure system can handle expected traffic
- **Error Handling**: Test edge cases and error scenarios

---

## 📚 Technologies to Consider

**Backend:**
- Node.js with Express.js or Fastify
- Python with Django or FastAPI
- Java with Spring Boot
- C# with ASP.NET Core

**Databases:**
- PostgreSQL for relational data
- MongoDB for document storage
- Redis for caching and sessions
- Elasticsearch for search functionality

**Frontend:**
- React.js with TypeScript
- Vue.js with Nuxt.js
- Angular with Material Design
- Next.js for full-stack applications

**DevOps & Deployment:**
- Docker for containerization
- Kubernetes for orchestration
- AWS/Azure/GCP for cloud services
- CI/CD pipelines with GitHub Actions

---

*Happy coding! 🎯 These scenarios will test your full-stack development skills across various domains and real-world applications.*