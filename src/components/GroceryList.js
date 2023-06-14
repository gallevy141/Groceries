import React from "react"
import GroceryItem from "./GroceryItem"

const GroceryList = () => {
  // Initialize the groceries array with grocery items
  const groceries = [
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
    <div className="grocery-list">
      <h2>Groceries</h2>
      <ul>
        {groceries.map((grocery, index) => (
          <GroceryItem key={index} grocery={grocery} />
        ))}
      </ul>
    </div>
  )
}

export default GroceryList