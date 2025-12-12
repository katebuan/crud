import React from "react";

const InventoryTable = ({ inventory, openEdit, deleteItem }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="py-3 px-4">#</th>
            <th className="py-3 px-4">Item</th>
            <th className="py-3 px-4">Qty</th>
            <th className="py-3 px-4">Category</th>
            <th className="py-3 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index} className="text-center border-b">
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.qty}</td>
              <td className="py-2 px-4">{item.category}</td>
              <td className="py-2 px-4 flex justify-center gap-2">
                <button
                  onClick={() => openEdit(index)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItem(index)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
