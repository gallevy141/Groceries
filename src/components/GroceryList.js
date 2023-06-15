import React from "react"
import GroceryItem from "./GroceryItem"

const GroceryList = ({ groceries, onGroceryItemClick }) => {
  return (
    <div className="grocery-list">
      <h2>Groceries</h2>
      <ul>
        {groceries.map((item, index) => (
          <GroceryItem key={index} item={item} onGroceryItemClick={onGroceryItemClick} />
        ))}
      </ul>
    </div>
  )
}

export default GroceryList