import React from "react"

const Receipt = ({ shopping }) => {
  // Calculate the total price
  const totalPrice = shopping.reduce(
    (total, item) => total + item.groceryItem.price * item.quantity,
    0
  )

  return (
    <div className="receipt">
      <h2>Receipt</h2>
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
      <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  )
}

export default Receipt