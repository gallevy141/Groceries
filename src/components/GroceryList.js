import React from "react"

const GroceryList = ({groceries, onGroceryClick}) => {
  return (
    <ul id="groceries">
      {groceries.map((item, index) => (
        <li 
          key={index}
          className={item.quantity === 0 ? 'out-of-stock' : ''}
          onClick={() => onGroceryClick(index)}
        >
          <img src={item.thumbnail} alt={item.name} />
          <span>{item.name} - ${item.price.toFixed(2)} (x{item.quantity})</span>
        </li>
      ))}
    </ul>
  )
}

export default GroceryList