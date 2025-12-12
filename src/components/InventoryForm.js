import React, { useState } from "react";

const InventoryForm = ({ addItem }) => {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {
    if (!name || !qty || !category) {
      alert("Please fill all fields");
      return;
    }
    addItem({ name, qty, category });
    setName("");
    setQty("");
    setCategory("");
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow mb-6">
      <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
};

export default InventoryForm;
