# React Admin Dashboard

This project is a fully functional Admin Dashboard built with React and Redux Toolkit, featuring a responsive design using Bootstrap 5.  
It provides an interface to manage users, search, add new users, authentication (login/logout), and user-friendly notifications.

## Features

- 🔐 User Authentication (Mock login/logout with LocalStorage & JWT).
- 🔍 Real-time user search.
- 📋 User table with pagination.
- ➕ Add new users via modal form.
- 🔔 Toast notifications (success/error).
- 🎨 Responsive design for all screen sizes.
- 🧭 Sidebar navigation (Home, Users, Settings).
- 📌 Simple and clean UI.
-     Fetch and display data from a free REST API (JSONPlaceholder)
    EndPoint: https://jsonplaceholder.typicode.com/users

## Tech Stack

- React 19
- Redux Toolkit
- React Router DOM
- Bootstrap 5
- React Icons
- React Toastify

## 📂 Project Structure

src/
├── components/
│ └── ui/ # UI components (Input, DataTable, Modal,Buttons)
└── pageComponent/ # Pages components (homeComponent)

├── layouts/ # Layouts (Sidebar, Topbar, Footer)
├── pages/ # App pages (Authentcation,Layout,HomePage, AddModalPage)
├── redux/ # Redux slices (authSlice, userSlice, searchSlice, modalSlice,store)
├── App.js
└── index.js

## Installation

1- Clone the repository:
git clone https://github.com/mahmoudshrief1166/lightweight-user-dashboard-.git
cd users-dashboard
2- Install dependencies:
npm install
3- Run the project:
npm run dev

## Usage

Open http://localhost:port
in your browser.

Log in (Token stored in LocalStorage) (name = admin && password = 123).
Try searching for a user in the TopBar.
Add a new user with the Add User button.

## Author

Mahmoud Shrief
GitHub: https://github.com/mahmoudshrief1166
LinkedIn: https://www.linkedin.com/in/mahmoud-shrief1166
