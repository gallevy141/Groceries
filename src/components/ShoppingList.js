import React from "react"
import ShoppingItem from "./ShoppingItem"

const ShoppingList = () => {
  const shopping = [
    {
        name: "Apple",
        price: 2.00,
        quantity: 5,
        thumbnail: "item1.png",
    },
    {
        name: "Orange",
        price: 2.00,
        quantity: 3,
        thumbnail: "item2.png",
    },
    {
        name: "Strawberry",
        price: 1.50,
        quantity: 15,
        thumbnail: "item3.png",
    },
    {
        name: "Peach",
        price: 1.99,
        quantity: 8,
        thumbnail: "item4.png",
    },
    {
        name: "Lychee",
        price: 0.60,
        quantity: 58,
        thumbnail: "item5.png",
    },
    {
        name: "Raspberry",
        price: 0.50,
        quantity: 78,
        thumbnail: "item6.png",
    },
    {
        name: "Pineapple",
        price: 3.55,
        quantity: 8,
        thumbnail: "item7.png",
    }
  ]

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      <ul>
        {shopping.map((item, index) => (
          <ShoppingItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ShoppingList