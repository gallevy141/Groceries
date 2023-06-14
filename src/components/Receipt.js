import React from "react"

const Receipt = ({ shopping }) => {
  return (
    <div className="receipt">
      <ul>
        {shopping.map((item, index) => (
          <li key={index}>
            <span>
              {item.groceryItem.name} - ${item.groceryItem.price.toFixed(2)} (x
              {item.quantity})
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Receipt