import React from "react"
import GroceryItem from "./GroceryItem"

const GroceryList = ({ groceries, onGroceryClick }) => {
  return (
    <div className="grocery-list">
      <h2>Groceries</h2>
      <ul>
        {groceries.map((item, index) => (
          <GroceryItem key={index} item={item} onGroceryClick={onGroceryClick} />
        ))}
      </ul>
    </div>
  )
}

export default GroceryList