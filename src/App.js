import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import Footer from './components/Footer'
import GroceryList from './components/GroceryList'
import OrderSummary from './components/OrderSummary'
import ShoppingList from './components/ShoppingList'
import Receipt from './components/Receipt'
import GroceryItem from './components/GroceryItem'
import ShoppingItem from './components/ShoppingItem'

const App = () => {
  const initialGroceries = [
    { name: "Apple", price: 1.00, quantity: 10, thumbnail: "apple.png" },
    { name: "Banana", price: 0.50, quantity: 20, thumbnail: "banana.png" },
    { name: "Cherry", price: 2.00, quantity: 15, thumbnail: "cherry.png" },
    { name: "Durian", price: 5.00, quantity: 5, thumbnail: "durian.png" },
    { name: "Elderberry", price: 1.50, quantity: 25, thumbnail: "elderberry.png" },
    { name: "Fig", price: 1.75, quantity: 10, thumbnail: "fig.png" },
    { name: "Grapefruit", price: 2.50, quantity: 30, thumbnail: "grapefruit.png" },
  ]

  const [groceries, setGroceries] = useState(initialGroceries)
  const [shopping, setShopping] = useState([])

  const handleGroceryClick = (item) => {
    const updatedGroceries = groceries.map((grocery) =>
      grocery.name === item.name
        ? { ...grocery, quantity: grocery.quantity - 1 }
        : grocery
    )

    const updatedShopping = shopping.map((shopItem) =>
      shopItem.groceryItem.name === item.name
        ? { ...shopItem, quantity: shopItem.quantity + 1 }
        : shopItem
    )
    
    if (!updatedShopping.find((i) => i.groceryItem.name === item.name)) {
      updatedShopping.push({ groceryItem: item, quantity: 1 })
    }

    setGroceries(updatedGroceries)
    setShopping(updatedShopping)
  }

  return (
    <div className="App container">
      <Header />
      <GroceryList groceries={groceries} onGroceryClick={handleGroceryClick} />
      <OrderSummary shopping={shopping} />
      <ShoppingList shopping={shopping} />
      <Receipt shopping={shopping} />
      <Footer />
    </div>
  )
}

export default App