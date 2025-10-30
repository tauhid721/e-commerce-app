import React from 'react'
import { useSearch } from '../context/SearchContext'

function Menu() {

  const { search } = useSearch();

  const products = ["Pizza", "Burger", "Pasta", "Sandwich", "Salad"];

  const filtered = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="p-6">
      <h1 className="text-3xl mb-4">Our Menu</h1>
      <ul className="space-y-2">
        {filtered.map((p, i) => (
          <li key={i} className="p-2 border rounded">{p}</li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Menu
