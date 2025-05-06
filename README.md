
# Event Management API

A simple event management  API where users can create, view, update, and delete events.

## Tech Stack

- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[Express.js](https://expressjs.com/)** - Web framework
- **[MongoDB](https://www.mongodb.com/)** - NoSQL database
- **[Mongoose](https://mongoosejs.com/)**
- **Git**

## Features

- Create, read, update, and delete events
- No authentication required (public API)
- All changes committed to the GitHub repo
- date validation
- No authentication
- JSON Responses only

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| POST | /events | Create a new event |
| GET | /events | List all events |
| GET | /events/:id | Get a specific event |
| PUT | /events/:id | Update an event |
| DELETE | /events/:id | Delete an event |

## How to Use

1. Clone the repository
   ```
[   git clone https://github.com/yourusername/event-management-api.git
](https://github.com/Anuroop9685/event_management-api.git)   

cd event-management-api
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   - Copy `.env.example` to `.env`
   - Configure your MongoDB connection string

4. Start the server
   ```
   npm start
   ```

## Hosted API

The API is hosted at: [https://event-management-api-hbj8.onrender.com](https://event-management-api-hbj8.onrender.com)

## Postman Collection

Test the API using this Postman collection: [Event Management API Collection](https://www.postman.com/planetary-capsule-916523/workspace/public-workspace/collection/12345678-abcdef12-1234-5678-abcd-ef1234567890)      | Default               |
|---------------|-------------------------------------|------------------------|
| PORT          | Port for the API server             | 8080                   |
| MONGODB_URI   | MongoDB connection string           | |mongodb+srv://Anuroop9685:Roopasree@cluster0.dmmfc7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



## Testing

Run 

```bash
npm start
or
node index.js
```
Hosted API
The API is hosted at: https://event-management-api-hbj8.onrender.com


Postman Collection
The tested event collection using Postman is saved in the repo




