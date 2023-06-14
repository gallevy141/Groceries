import React from "react"

const OrderSummary = ({ shopping }) => {
  let totalItems = 0
  let totalPrice = 0

  shopping.forEach((item) => {
    totalItems += item.quantity
    totalPrice += item.groceryItem.price * item.quantity
  })

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p>Total Items: {totalItems}, Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  )
}

export default OrderSummary