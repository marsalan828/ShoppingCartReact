# React Shopping Cart Project - Deliverables

## Project Overview
A React application that displays a list of products fetched from a fake API, allowing each product to be individually selected and added to a shopping cart. Users can manage item quantities in the cart, with real-time updates to the total cost based on items and quantities.

## Deliverables

### 1. **Product List Component**
   - Displays a list of products fetched from a fake API (e.g., `https://fakestoreapi.com/products`).
   - Each product shows:
     - Name
     - Price
     - Image
   - "Add to Cart" button for each product, allowing individual items to be added to the shopping cart.

### 2. **Shopping Cart Component**
   - Displays items currently in the cart with details including:
     - Product name
     - Price per unit
     - Quantity
   - Provides controls for:
     - Increasing and decreasing quantity for each product.
     - Removing an item when quantity reaches zero.
   - Dynamically calculates and displays the cart’s total price based on items and quantities.

### 3. **App Component**
   - Manages the main state for products in the cart and their quantities.
   - Fetches product data from the fake API in a `useEffect` hook.
   - Passes state and handler functions to `ProductList` and `Cart` components to:
     - Add items to the cart
     - Update quantities
     - Remove items from the cart

### 4. **Integration with Fake API**
   - Product data (e.g., `https://fakestoreapi.com/products`) is fetched and displayed in the `ProductList` component.
   - Provides sample product details like:
     - Product ID
     - Name
     - Description
     - Price
     - Image URL
   - Demonstrates the use of `fetch` or `axios` to pull in data dynamically from a REST API, and how this data can be used in React components.

### 5. **Sample Product Data (Using Fake API)**
   - Products are fetched via API, so no hardcoded data is needed in the project.
   - Uses async data loading and error handling in case of API issues.

### 6. **Styling (Optional)**
   - Basic styling for components to visually separate the product list and shopping cart.

### 7. **Bonus: Error Handling and Loading States**
   - Optional addition of loading and error states to handle API fetch delays or failures.
