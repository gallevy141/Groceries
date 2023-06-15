import React from "react"

const GroceryItem = ({ item, onGroceryItemClick }) => {
  if (!item || item.price === undefined) {
    return <div>Error: Item not available</div>
  }

  return (
    <div>
      <p>{item.name} - ${item.price.toFixed(2)}</p>
      <button onClick={() => onGroceryItemClick(item)}>Add to cart</button>
    </div>
  )
}

export default GroceryIte