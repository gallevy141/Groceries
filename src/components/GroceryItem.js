import React from "react"

const GroceryItem = ({ item, onGroceryItemClick }) => {
  if (!item || item.price === undefined) {
    return <div>Error: Item not available</div>
  }

  return (
    <div>
      <p>{item.name} - ${item.price.toFixed(2)}</p>
      <p>Quantity: {item.quantity}</p>
      <img src={item.thumbnail} alt={item.name} />
      <button onClick={() => onGroceryItemClick(item)}>Add to cart</button>
    </div>
  )
}

export default GroceryItem