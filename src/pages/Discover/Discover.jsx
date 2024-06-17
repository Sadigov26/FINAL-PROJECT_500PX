import React from 'react';
import Category from '../../components/Category/Category';

const Discover = () => {
  const categories = ['landscape', 'travel', 'food', 'architecture', 'animals'];

  return (
    <div className="discover">
      <h1>Discover Categories</h1>
      <div className="category-list">
        {categories.map(category => (
          <Category key={category} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Discover;
