import React from "react"

const GroceryItem = ({ item, onGroceryClick }) => {
  const handleClick = () => {
    if (onGroceryClick) {
      onGroceryClick(item);
    }
  }
  
  return (
    <li
      className={item.quantity === 0 ? "out-of-stock" : ""}
      onClick={handleClick}
    >
      <img src={item.thumbnail} alt={item.name} />
      <span>
        {item.name} - ${item.price.toFixed(2)} (x{item.quantity})
      </span>
    </li>
  )
}

export default GroceryItem