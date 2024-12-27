
import './App.css'
import React, { useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './store/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <FavoritesList />
      <RecommendationsList />
      <RecipeList />
    </div>
  );
};

export default App;


