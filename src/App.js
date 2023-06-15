import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Footer from './Footer'
import GroceryList from './GroceryList'
import OrderSummary from './OrderSummary'
import ShoppingList from './ShoppingList'
import Receipt from './Receipt'

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
    setGroceries(
      groceries.map((grocery) =>
        grocery.name === item.name
          ? { ...grocery, quantity: grocery.quantity - 1 }
          : grocery
      )
    );
    setShopping([...shopping, { ...item, quantity: 1 }])
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