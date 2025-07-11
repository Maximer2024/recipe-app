import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function CategoryDetail() {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`http://localhost:8000/api/categories/${id}/`).then(res => res.json()),
      fetch(`http://localhost:8000/api/recipes/?category=${id}`).then(res => res.json())
    ])
      .then(([categoryData, recipesData]) => {
        setCategory(categoryData);
        setRecipes(recipesData);
        setLoading(false);
      })
      .catch(error => console.error('Ошибка загрузки категории:', error));
  }, [id]);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{category?.name}</h2>
      <p className="mb-4">{category?.description}</p>
      <h3 className="text-xl font-medium mb-2">Рецепты</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="p-4 border rounded hover:bg-gray-100">
            <h4 className="text-lg font-medium">{recipe.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetail;