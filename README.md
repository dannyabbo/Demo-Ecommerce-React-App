# Demo Ecommerce Site - ReactJS

This project serves as a showcase of fundamental understanding of React and the utilization of the `useContext` React hook for global state management across pages. Please note that while mobile responsiveness and detailed CSS styling were not the primary focus of this project, the main emphasis was on the development of the application's core functionalities.

## Features

- Product listing: Display a list of available products.
- Add to Cart: Add products to the shopping cart.
- View Cart: View the list of products in the shopping cart.
- Edit Cart: Modify and update the cart's contents.

## Getting Started

To explore the app and its functionality:

 - Clone the repo, CD into the directory and use "NPM start" to run the App.

## Global State Management

The global state management in this project is achieved using the `useContext` hook. The `ShopContext` provides the necessary context for sharing cart-related data across different components. This allows for seamless communication between various parts of the application without the need to pass props down the component tree.

## React Router

This project also showcases the use of React Router for managing navigation between different pages. The routing setup can be found in the `App.js` file, and the corresponding components for each route are stored in the `pages/` directory.

## Folder Structure

The project follows a basic folder structure to organize different aspects of the application:

- `src/`
  - `assets/`: Contains images for the products.
  - `components/`: Contains reusable React components.
  - `context/`: Contains the `ShopContext` for global state management.
  - `pages/`: Contains the main pages of the application and their components.
  - `App.js`: The root component that defines the application's structure.
