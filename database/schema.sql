-- Create database
CREATE DATABASE IF NOT EXISTS property_direct;
USE property_direct;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  phone VARCHAR(20),
  password VARCHAR(255) NOT NULL,
  role ENUM('User', 'Owner', 'Admin') DEFAULT 'User',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create properties table
CREATE TABLE IF NOT EXISTS properties (
  id VARCHAR(36) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  location VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip_code VARCHAR(20) NOT NULL,
  area DECIMAL(10, 2) NOT NULL,
  bhk INT NOT NULL,
  bathrooms INT NOT NULL,
  furnishing ENUM('Unfurnished', 'Semi-Furnished', 'Fully Furnished') NOT NULL,
  floor INT NOT NULL,
  total_floors INT NOT NULL,
  facing VARCHAR(50),
  property_type VARCHAR(50) NOT NULL,
  listing_type ENUM('Rent', 'Sale') NOT NULL,
  owner_type ENUM('Owner', 'Builder') NOT NULL,
  contact_name VARCHAR(100) NOT NULL,
  contact_phone VARCHAR(20) NOT NULL,
  contact_email VARCHAR(100) NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  user_id VARCHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Create property_images table
CREATE TABLE IF NOT EXISTS property_images (
  id VARCHAR(36) PRIMARY KEY,
  property_id VARCHAR(36) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  is_primary BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

-- Create property_amenities table
CREATE TABLE IF NOT EXISTS property_amenities (
  id VARCHAR(36) PRIMARY KEY,
  property_id VARCHAR(36) NOT NULL,
  amenity VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

-- Create favorites table
CREATE TABLE IF NOT EXISTS favorites (
  id VARCHAR(36) PRIMARY KEY,
  user_id VARCHAR(36) NOT NULL,
  property_id VARCHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE,
  UNIQUE KEY (user_id, property_id)
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id VARCHAR(36) PRIMARY KEY,
  property_id VARCHAR(36) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE
);

-- Insert sample data for users
INSERT INTO users (id, name, email, phone, password, role) VALUES
('usr1', 'John Smith', 'john@example.com', '+1-234-567-8901', '$2a$10$hKUzMqi5.OKJXbdh4oCkEO', 'Owner'),
('usr2', 'Emily Johnson', 'emily@example.com', '+1-345-678-9012', '$2a$10$hKUzMqi5.OKJXbdh4oCkEO', 'Owner'),
('usr3', 'Michael Brown', 'michael@example.com', '+1-456-789-0123', '$2a$10$hKUzMqi5.OKJXbdh4oCkEO', 'Owner'),
('usr4', 'Sarah Thompson', 'sarah@example.com', '+1-789-012-3456', '$2a$10$hKUzMqi5.OKJXbdh4oCkEO', 'User');

-- Insert sample data for properties
INSERT INTO properties (id, title, description, price, location, address, city, state, zip_code, area, bhk, bathrooms, furnishing, floor, total_floors, facing, property_type, listing_type, owner_type, contact_name, contact_phone, contact_email, is_verified, is_featured, user_id) VALUES
('prop1', 'Modern 2BHK Apartment in Downtown', 'A beautiful modern apartment with all amenities in the heart of the city. Perfect for families or professionals.', 2500.00, 'Downtown, New York', '123 Main St', 'New York', 'NY', '10001', 1200.00, 2, 2, 'Semi-Furnished', 5, 10, 'East', 'Apartment', 'Rent', 'Owner', 'John Smith', '+1-234-567-8901', 'john@example.com', TRUE, TRUE, 'usr1'),
('prop2', 'Spacious 3BHK Villa with Garden', 'Luxurious villa with a beautiful garden, modern amenities, and ample parking space in a gated community.', 4500.00, 'Beverly Hills, Los Angeles', '456 Palm Ave', 'Los Angeles', 'CA', '90210', 2500.00, 3, 3, 'Fully Furnished', 1, 2, 'South', 'Villa', 'Rent', 'Owner', 'Emily Johnson', '+1-345-678-9012', 'emily@example.com', TRUE, TRUE, 'usr2'),
('prop3', 'Cozy 1BHK Apartment Near Metro', 'A cozy and affordable apartment with good connectivity, ideal for bachelors or small families.', 1200.00, 'Midtown, Chicago', '789 Oak St', 'Chicago', 'IL', '60601', 750.00, 1, 1, 'Semi-Furnished', 3, 8, 'West', 'Apartment', 'Rent', 'Owner', 'Michael Brown', '+1-456-789-0123', 'michael@example.com', TRUE, TRUE, 'usr3');

-- Insert sample data for property_images
INSERT INTO property_images (id, property_id, image_url, is_primary) VALUES
('img1', 'prop1', '/images/property1-1.jpg', TRUE),
('img2', 'prop1', '/images/property1-2.jpg', FALSE),
('img3', 'prop1', '/images/property1-3.jpg', FALSE),
('img4', 'prop2', '/images/property2-1.jpg', TRUE),
('img5', 'prop2', '/images/property2-2.jpg', FALSE),
('img6', 'prop2', '/images/property2-3.jpg', FALSE),
('img7', 'prop3', '/images/property3-1.jpg', TRUE),
('img8', 'prop3', '/images/property3-2.jpg', FALSE),
('img9', 'prop3', '/images/property3-3.jpg', FALSE);

-- Insert sample data for property_amenities
INSERT INTO property_amenities (id, property_id, amenity) VALUES
('am1', 'prop1', 'Gym'),
('am2', 'prop1', 'Swimming Pool'),
('am3', 'prop1', 'Security'),
('am4', 'prop1', 'Parking'),
('am5', 'prop1', 'Power Backup'),
('am6', 'prop2', 'Garden'),
('am7', 'prop2', 'Swimming Pool'),
('am8', 'prop2', 'Security'),
('am9', 'prop2', 'Parking'),
('am10', 'prop2', 'Power Backup'),
('am11', 'prop2', 'Home Theater'),
('am12', 'prop3', 'Security'),
('am13', 'prop3', 'Parking'),
('am14', 'prop3', 'Power Backup'),
('am15', 'prop3', 'Lift');
