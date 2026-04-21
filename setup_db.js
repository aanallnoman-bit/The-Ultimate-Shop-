const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');

const db = new sqlite3.Database('./project.db');

db.serialize(() => {
    console.log("Setting up database with new visual features...");

    // Create Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE,
        password TEXT,
        role TEXT
    )`);

    // Create Products table (added is_new_arrival)
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price INTEGER,
        image TEXT,
        is_new_arrival INTEGER DEFAULT 0
    )`);

    // Create Orders table to store purchased carts
    db.run(`CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        items_json TEXT,
        total_amount INTEGER,
        payment_method TEXT,
        status TEXT DEFAULT 'Pending'
    )`);

    // Clean existing tables to reset schema modifications cleanly
    db.run(`DELETE FROM products`);
    db.run(`DELETE FROM users`);
    db.run(`DELETE FROM orders`);
    
    // Insert initial users (Role-Based Access)
    const salt = bcrypt.genSaltSync(10);
    const adminHash = bcrypt.hashSync('admin123', salt);
    
    const insertUser = db.prepare("INSERT INTO users (username, password, role) VALUES (?, ?, ?)");
    insertUser.run('admin', adminHash, 'admin'); // Admin role
    insertUser.finalize();

    // Insert Default Products
    const insertProduct = db.prepare("INSERT INTO products (name, price, image, is_new_arrival) VALUES (?, ?, ?, ?)");
    insertProduct.run('Coffee Quartz', 800, 'images/polo_1.jpeg', 1); // New Arrival!
    insertProduct.run('Green Polo', 800, 'images/polo_2.jpeg', 0);
    insertProduct.run('Anthra Melange', 1000, 'images/polo_3.jpeg', 1); // New Arrival!
    insertProduct.run('Hallmark', 1000, 'images/polo_4.jpeg', 0);
    insertProduct.run('Magnificent', 1000, 'images/polo_5.jpeg', 1); // New Arrival!
    insertProduct.finalize();

    console.log("Database successfully provisioned with advanced tables!");
});

db.close();
