import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/api/categories/')
      .then(response => response.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(error => console.error('Ошибка загрузки категорий:', error));
  }, []);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Категории</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(category => (
          <Link key={category.id} to={`/category/${category.id}`} className="p-4 border rounded hover:bg-gray-100">
            <h3 className="text-xl font-medium">{category.name}</h3>
            <p>{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;