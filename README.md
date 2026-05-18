# 🍔 Food-Del — Full Stack Food Delivery App

A full-stack food delivery web application built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). Food-Del allows users to browse restaurants and menus, add items to their cart, and place orders securely — all through a clean, responsive interface. An **Admin Panel** is also included for complete backend management.

---

## 🌐 Live Demo

User App: [https://food-del-frontend-y1qj.onrender.com/]

---


## ✨ Features

### 👤 User Side
- **Browse & Order Food** — Explore menus and add items to your cart with ease
- **User Authentication** — Secure Register & Login with JWT-based sessions
- **Cart & Checkout** — Manage your cart and place orders seamlessly
- **Payment Integration** — Secure online payment processing at checkout

### 🛠️ Admin Side
- **Admin Dashboard** — Manage food items, categories, and incoming orders
- **Order Management** — View and update the status of all orders in real time
- **Menu Management** — Add, edit, or remove food items from the menu

---

## 🧰 Tech Stack

| Layer      | Technology                     |
|------------|-------------------------------|
| Frontend   | React.js, CSS                 |
| Backend    | Node.js, Express.js           |
| Database   | MongoDB (Mongoose ODM)        |
| Auth       | JSON Web Tokens (JWT)         |
| Payments   | Payment Gateway Integration   |

---

## 📁 Project Structure

```
Food-Del/
├── frontend/        # React user-facing application
├── backend/         # Node.js + Express REST API
└── admin/           # React admin panel
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

---

### 1. Clone the Repository

```bash
git clone https://github.com/Kalpeshpagar/Food-Del.git
cd Food-Del
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PAYMENT_SECRET_KEY=your_payment_secret_key
```

Start the backend server:

```bash
npm run server
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

### 4. Admin Panel Setup

```bash
cd ../admin
npm install
npm run dev
```

---

## 🔑 Environment Variables

| Variable             | Description                          |
|----------------------|--------------------------------------|
| `MONGO_URI`          | MongoDB connection string            |
| `JWT_SECRET`         | Secret key for JWT token signing     |
| `PORT`               | Port for the backend server          |
| `PAYMENT_SECRET_KEY` | Secret key for payment gateway       |

---


## 👨‍💻 Author

**Kalpesh Pagar**
- GitHub: [@Kalpeshpagar](https://github.com/Kalpeshpagar)
