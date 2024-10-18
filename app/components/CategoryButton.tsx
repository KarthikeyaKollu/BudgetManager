import React from 'react';

interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, isActive = false }) => (
  <div className={`px-3 py-1 rounded-md border border-solid ${isActive ? 'bg-blue-700 text-white' : 'bg-white text-neutral-500'} border-blue-700 border-opacity-70`}>
    {label}
  </div>
);

export default CategoryButton;