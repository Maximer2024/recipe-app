import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8000/api/recipes/${id}/`)
      .then(response => response.json())
      .then(data => {
        setRecipe(data);
        setLoading(false);
      })
      .catch(error => console.error('Ошибка загрузки рецепта:', error));
  }, [id]);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{recipe?.title}</h2>
      <h3 className="text-xl font-medium">Категория: {recipe?.category.name}</h3>
      <h3 className="text-xl font-medium mt-4">Ингредиенты</h3>
      <p className="mb-4">{recipe?.ingredients}</p>
      <h3 className="text-xl font-medium">Инструкции</h3>
      <p>{recipe?.instructions}</p>
    </div>
  );
}

export default RecipeDetail;