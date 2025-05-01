"use client"
import { useState } from "react";

export default function FilterDialog({ isOpen, onClose, onApply, selectedFilters }) {
  const [filters, setFilters] = useState(selectedFilters || []);

  const options = ["Monthly", "Yearly", "Lifetime"];

  const toggleFilter = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  const applyFilters = () => {
    onApply(filters);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[300px]">
        <h2 className="text-lg font-semibold mb-4 text-center">Filter Plans</h2>
        <div className="flex flex-col space-y-2 mb-4">
          {options.map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={filters.includes(option)}
                onChange={() => toggleFilter(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={applyFilters}
            className="px-4 py-2 bg-[#00BFA6] text-white rounded-md hover:bg-[#009e8c]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
