import React from "react"

const Header = () => {
  return (
    <header className="p-3 bg-primary text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h1>Grocery Shopping</h1>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header