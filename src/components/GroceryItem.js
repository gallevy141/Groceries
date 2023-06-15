import React from "react"

const GroceryItem = ({ item, onGroceryClick }) => {
  const handleClick = () => {
    if (onGroceryClick) {
      onGroceryClick(item.groceryItem)
    }
  }

  return (
    <li
      className={item.groceryItem.quantity === 0 ? "out-of-stock" : ""}
      onClick={handleClick}
    >
      <img src={item.groceryItem.thumbnail} alt={item.groceryItem.name} />
      <span>
        {item.groceryItem.name} - ${item.groceryItem.price.toFixed(2)} (x{item.quantity})
      </span>
    </li>
  )
}

export default GroceryItem