# The Ultimate Shop

A full-stack e-commerce web application created for a university project.

## 📌 Project Overview
The Ultimate Shop is a beautifully designed, responsive e-commerce platform that allows users to browse a dynamic catalog of clothing items, manage a shopping cart, and simulate checking out. It offers both a clean customer-facing storefront and a backend to serve product data. 

This project demonstrates core competencies in frontend web design and backend API integration.

## ✨ Key Features
- **Dynamic Catalog:** Product data and new arrivals are loaded dynamically from via backend API endpoints.
- **Client-side Cart Management:** A fully functional JavaScript shopping cart stored natively using `localStorage`. Modifying quantities, tracking total cost, and a cart badge indicator are all included natively.
- **Modern UI/UX:** Responsive layouts built with Bootstrap alongside custom CSS variables. Features an elegant dark mode navigation bar, premium typography (Outfit font), glassmorphism styles, and CSS transitions.
- **Role-based Authentication Structure:** Custom login forms routing customers to the storefront and administrators to a secure admin dashboard template.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, FontAwesome
- **Backend & Database:** Node.js/PHP (Serving RESTful API endpoints for products and users), SQLite or MySQL Integration.

## 🚀 How to Run Locally
1. Clone the repository to your local machine.
2. Initialize the backend database (run the SQL scripts located within the repository or start your server environment such as XAMPP/Node server).
3. Ensure the `api/products.php` and other backend scripts are accessible via localhost.
4. Navigate to `index.html` via your local web server to launch the storefront.

## 📁 Repository Structure
* `/images/` - High-quality image assets including product thumbnails and the main hero banner.
* `/api/` - Backend API endpoints to retrieve user data, products, and checkout logic.
* `index.html` / `shop.html` - Core storefront views dynamically populated via `.js`.
* `cart.html` / `cart.js` - Logic and views dedicated to the user's shopping basket.
* `style.css` - Custom design rules and CSS variables for theming.
