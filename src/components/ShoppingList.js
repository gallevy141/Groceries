import React from "react"
import GroceryItem from "./GroceryItem"

const ShoppingList = ({ shopping }) => {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <ul>
        {shopping.map((item, index) => (
          <GroceryItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList
