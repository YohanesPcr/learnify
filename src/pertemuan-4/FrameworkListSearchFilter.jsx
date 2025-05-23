import React, { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  // State initialization
  // const [searchTerm, setSearchTerm] = useState("");
  // const [selectedTag, setSelectedTag] = useState("");
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
    // Add more state fields as necessary
  });

  // Handle changes in input fields
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  // Filtering logic based on search term and selected tag
  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  // Unique tags extraction
  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={dataForm.searchTerm} // Updated to use dataForm
        onChange={handleChange} // Generalized change handler
      />

      <select
        name="selectedTag"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        value={dataForm.selectedTag} // Updated to use dataForm
        onChange={handleChange} // Generalized change handler
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {filteredFrameworks.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4 rounded-lg shadow-md bg-white"
        >
          <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-500">Developer: {item.details.developer}</p>
          <p className="text-gray-500">
            Official Website:{" "}
            <a
              href={item.details.officialWebsite}
              className="text-blue-500 underline"
            >
              {item.details.officialWebsite}
            </a>
          </p>
          <div className="mt-2">
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
