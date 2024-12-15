import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../css/RecipeDetails.css';
import Sidebar from "./Sidebar";
const RecipeDetails = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/recipes/get/${recipeId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch recipe");
                }
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        };

        fetchRecipe();
    }, [recipeId]);

    if (!recipe) {
        return <p>Loading...</p>;
    }

    const ingredientsArray = recipe.ingredients.split('\n').map(item => item.trim());
    const instructionsArray = recipe.instructions.split('\n').map(item => item.trim());

    return (
        <div style={{display:"flex",flexDirection:"row"}}>
            <Sidebar/>
            <div className="recipe-list">
                <header className="recipe-book-header">
                    <h1>Recipe Book</h1>
                </header>
                <div className="recipe-card">
                    <h1>{recipe.title}</h1>
                    <img src={recipe.imageUrl} alt={recipe.title} className="recipe-image" />
                    <h3>Ingredients</h3>
                    <ul>
                        {ingredientsArray.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <ul>
                        {instructionsArray.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;