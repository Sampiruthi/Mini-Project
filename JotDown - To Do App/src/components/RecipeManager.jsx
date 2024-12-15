// import React, { useState, useEffect } from "react";
// import '../css/RecipeManager.css';
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";

// const RecipeManager = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentRecipe, setCurrentRecipe] = useState({ title: "", ingredients: [], instructions: "", image: "" });
//   const [currentIndex, setCurrentIndex] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/recipes/getall");
//         if (!response.ok) {
//           throw new Error("Failed to fetch recipes");
//         }
//         const data = await response.json();
//         setRecipes(data);
//       } catch (error) {
//         console.error("Error fetching recipes:", error);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   const handleDelete = async (index) => {
//     const confirmDelete = window.confirm(`Are you sure you want to delete ${recipes[index].title}?`);
//     if (confirmDelete) {
//       const recipeId = recipes[index].id;
//       await fetch(`http://localhost:8080/api/recipes/delete/${recipeId}`, {
//         method: "DELETE",
//       });

//       const updatedRecipes = recipes.filter((_, idx) => idx !== index);
//       setRecipes(updatedRecipes);
//     }
//   };
//   const handleEdit = (index) => {
//     const recipe = recipes[index];

//     const ingredients = Array.isArray(recipe.ingredients)
//       ? recipe.ingredients.join("\n")
//       : recipe.ingredients;

//     const instructions = Array.isArray(recipe.instructions)
//       ? recipe.instructions.join("\n")
//       : recipe.instructions;

//     setCurrentRecipe({
//       ...recipe,
//       ingredients,
//       instructions
//     });
//     setCurrentIndex(index);
//     setIsEditing(true);
//   };


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "ingredients") {
//       setCurrentRecipe({ ...currentRecipe, [name]: value });
//     } else if (name === "instructions") {
//       setCurrentRecipe({ ...currentRecipe, instructions: value });
//     } else {
//       setCurrentRecipe({ ...currentRecipe, [name]: value });
//     }
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();

//     const updatedRecipe = {
//       ...currentRecipe,
//       ingredients: currentRecipe.ingredients.split("\n").map(item => item.trim()),
//       instructions: currentRecipe.instructions.split("\n").map(item => item.trim())
//     };

//     await fetch(`http://localhost:8080/api/recipes/update/${currentRecipe.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(updatedRecipe),
//     });

//     const updatedRecipes = [...recipes];
//     updatedRecipes[currentIndex] = updatedRecipe;
//     setRecipes(updatedRecipes);

//     setIsEditing(false);
//     setCurrentRecipe({ title: "", ingredients: [], instructions: "", image: "" });
//     setCurrentIndex(null);
//   };

//   const handleAddRecipe = () => {
//     navigate("/add-recipe");
//   };

//   const handleView = (recipeId) => {
//     navigate(`/recipe/${recipeId}`);
//   };

//   return (
//     <div style={{display:"flex",flexDirection:"row"}}>
//       <Sidebar />
//       <div className="recipe-manager">
//         <h1>Recipe Manager</h1>
//         <br></br>
//         <table>
//           <thead>
//             <tr>
//               <th>Recipe Name</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {recipes.map((recipe, index) => (
//               <tr key={index}>
//                 <td>{recipe.title}</td>
//                 <td>
//                   <button onClick={() => handleView(recipe.id)}>View</button>
//                   <button onClick={() => handleEdit(index)}>Edit</button>
//                   <button onClick={() => handleDelete(index)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={handleAddRecipe} style={{ marginTop: "20px" }}>Add Recipe</button>
//         {recipes.length === 0 && <p>No recipes available.</p>}

//         {isEditing && (
//           <div className="modal">
//             <div className="modal-content">
//               <h2>Edit Recipe</h2>
//               <form onSubmit={handleSave}>
//                 <label>
//                   Title:
//                   <br></br>
//                   <input
//                     type="text"
//                     name="title"
//                     value={currentRecipe.title}
//                     onChange={handleInputChange}
//                     style={{width:"430px"}}
//                   />
//                 </label>
//                 <label>
//                   Ingredients (one per line):
//                   <textarea
//                     name="ingredients"
//                     value={currentRecipe.ingredients}
//                     onChange={handleInputChange}
//                   />
//                 </label>
//                 <label>
//                   Instructions:
//                   <textarea
//                     name="instructions"
//                     value={currentRecipe.instructions}
//                     onChange={handleInputChange}
//                   />
//                 </label>
//                 <label>
//                   Image URL:
//                   <br></br>
//                   <input
//                     type="text"
//                     name="image"
//                     value={currentRecipe.imageUrl}
//                     onChange={handleInputChange}
//                     style={{width:"430px"}}
//                   />
//                 </label>
//                 <button type="submit">Save</button>
//                 <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default RecipeManager;
import React, { useState, useEffect, useContext } from "react";
import '../css/RecipeManager.css';
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { UserContext } from "../context/UserContext";

const RecipeManager = () => {
  const { userId } = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({ title: "", ingredients: [], instructions: "", image: "" });
  const [currentIndex, setCurrentIndex] = useState(null);
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null);

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userId");
    if (userIdFromStorage) {
      setStoredUserId(userIdFromStorage);
    } else {
      console.error("User is not logged in");
    }
  }, []);

  useEffect(() => {
    if (!storedUserId) {
      return;
    }

    const fetchRecipes = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/recipes/user/${storedUserId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, [storedUserId]);

  const handleDelete = async (index) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${recipes[index].title}?`);
    if (confirmDelete) {
      const recipeId = recipes[index].id;
      try {
        await fetch(`http://localhost:8080/api/recipes/delete/${recipeId}`, {
          method: "DELETE",
        });
        const updatedRecipes = recipes.filter((_, idx) => idx !== index);
        setRecipes(updatedRecipes);
      } catch (error) {
        console.error("Error deleting recipe:", error);
      }
    }
  };

  const handleEdit = (index) => {
    const recipe = recipes[index];
    const ingredients = Array.isArray(recipe.ingredients) ? recipe.ingredients.join("\n") : recipe.ingredients;
    const instructions = Array.isArray(recipe.instructions) ? recipe.instructions.join("\n") : recipe.instructions;

    setCurrentRecipe({
      ...recipe,
      ingredients,
      instructions
    });
    setCurrentIndex(index);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      setCurrentRecipe({ ...currentRecipe, [name]: value });
    } else if (name === "instructions") {
      setCurrentRecipe({ ...currentRecipe, instructions: value });
    } else {
      setCurrentRecipe({ ...currentRecipe, [name]: value });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...currentRecipe,
      ingredients: currentRecipe.ingredients.split("\n").map(item => item.trim()),
      instructions: currentRecipe.instructions.split("\n").map(item => item.trim())
    };

    try {
      const response = await fetch(`http://localhost:8080/api/recipes/update/${currentRecipe.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      });

      if (!response.ok) {
        throw new Error("Failed to update recipe");
      }

      const updatedRecipes = [...recipes];
      updatedRecipes[currentIndex] = updatedRecipe;
      setRecipes(updatedRecipes);

      setIsEditing(false);
      setCurrentRecipe({ title: "", ingredients: [], instructions: "", image: "" });
      setCurrentIndex(null);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  const handleAddRecipe = () => {
    navigate("/add-recipe");
  };

  const handleView = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar />
      <div className="recipe-manager">
        <h1>Recipe Manager</h1>
        <br />
        <table>
          <thead>
            <tr>
              <th>Recipe Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={index}>
                <td>{recipe.title}</td>
                <td>
                  <button onClick={() => handleView(recipe.id)}>View</button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRecipe} style={{ marginTop: "20px" }}>
          Add Recipe
        </button>
        {recipes.length === 0 && <p>No recipes available.</p>}

        {isEditing && (
          <div className="modal">
            <div className="modal-content">
              <h2>Edit Recipe</h2>
              <form onSubmit={handleSave}>
                <label>
                  Title:
                  <br />
                  <input
                    type="text"
                    name="title"
                    value={currentRecipe.title}
                    onChange={handleInputChange}
                    style={{ width: "430px" }}
                  />
                </label>
                <label>
                  Ingredients (one per line):
                  <textarea
                    name="ingredients"
                    value={currentRecipe.ingredients}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Instructions:
                  <textarea
                    name="instructions"
                    value={currentRecipe.instructions}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Image URL:
                  <br />
                  <input
                    type="text"
                    name="image"
                    value={currentRecipe.imageUrl}
                    onChange={handleInputChange}
                    style={{ width: "430px" }}
                  />
                </label>
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeManager;