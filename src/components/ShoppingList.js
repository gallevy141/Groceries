import React from "react"
import ShoppingItem from "./ShoppingItem"

const ShoppingList = ({ shopping, onRemoveItem }) => {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <ul>
        {shopping.map((item, index) => (
          <ShoppingItem key={index} item={item} onShoppingItemClick={onRemoveItem} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList