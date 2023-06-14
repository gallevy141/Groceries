import React from "react"

const ShoppingItem = ({ item, onShoppingItemClick }) => {
  return (
    <li>
      <span>
        {item.groceryItem.name} - ${item.groceryItem.price.toFixed(2)} (x
        {item.quantity})
      </span>
      <button onClick={() => onShoppingItemClick(item)}>Remove</button>
    </li>
  )
}

export default ShoppingItem