"use client"
import { useState } from "react";
import { SlEqualizer } from "react-icons/sl";
import FilterDialog from "./FilterDialog"; // Adjust path if needed

export default function FilterButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleApplyFilters = (filters) => {
    setSelectedFilters(filters);
    // TODO: Filter your table based on these filters
    console.log("Applied Filters:", filters);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsOpen(true)}
          className="flex justify-center font-medium rounded-full p-4 w-40 bg-[#00BFA6] text-white"
        >
          <SlEqualizer className="text-xl mr-2 font-medium" />
          Filter
        </button>
      </div>

      <FilterDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onApply={handleApplyFilters}
        selectedFilters={selectedFilters}
      />
    </>
  );
}
