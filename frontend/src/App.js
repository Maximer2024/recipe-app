import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryList from './components/CategoryList';
import CategoryDetail from './components/CategoryDetail';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Книга рецептов</h1>
        <Routes>
          <Route path="/" element={<CategoryList />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;