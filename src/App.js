import React, { useState, useEffect } from "react";
import InventoryForm from "./components/InventoryForm";
import InventoryTable from "./components/InventoryTable";
import EditModal from "./components/EditModal";

const App = () => {
  const [inventory, setInventory] = useState(
    JSON.parse(localStorage.getItem("inventoryData")) || []
  );
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("inventoryData", JSON.stringify(inventory));
  }, [inventory]);

  const addItem = (item) => {
    setInventory([...inventory, item]);
  };

  const openEdit = (index) => {
    setEditIndex(index);
  };

  const saveEdit = (index, updatedItem) => {
    const updatedInventory = [...inventory];
    updatedInventory[index] = updatedItem;
    setInventory(updatedInventory);
    setEditIndex(null);
  };

  const cancelEdit = () => {
    setEditIndex(null);
  };

  const deleteItem = (index) => {
    if (window.confirm("Delete this item?")) {
      const updatedInventory = inventory.filter((_, i) => i !== index);
      setInventory(updatedInventory);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-poppins">
      {/* Navbar */}
      <div className="bg-blue-900 text-white text-center text-2xl font-semibold py-4 shadow-md">
        📦 INVENTORY MANAGEMENT
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        <InventoryForm addItem={addItem} />
        <InventoryTable
          inventory={inventory}
          openEdit={openEdit}
          deleteItem={deleteItem}
        />
      </div>

      {editIndex !== null && (
        <EditModal
          item={inventory[editIndex]}
          index={editIndex}
          saveEdit={saveEdit}
          cancelEdit={cancelEdit}
        />
      )}
    </div>
  );
};

export default App;
