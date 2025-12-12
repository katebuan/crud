import React, { useState, useEffect } from "react";

const EditModal = ({ item, index, saveEdit, cancelEdit }) => {
  const [name, setName] = useState(item?.name || "");
  const [qty, setQty] = useState(item?.qty || "");
  const [category, setCategory] = useState(item?.category || "");

  useEffect(() => {
    setName(item?.name || "");
    setQty(item?.qty || "");
    setCategory(item?.category || "");
  }, [item]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Edit Item</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Item Name"
        />
        <input
          type="number"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Quantity"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          placeholder="Category"
        />
        <div className="flex justify-between">
          <button
            onClick={() => saveEdit(index, { name, qty, category })}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Save Changes
          </button>
          <button
            onClick={cancelEdit}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
