// // import React, { useState } from "react";
// // import '../css/AddRecipe.css';
// // import { useNavigate } from "react-router-dom";
// // import Sidebar from "./Sidebar";
// // const AddRecipe = ({ addRecipe }) => {
// //   const [newRecipe, setNewRecipe] = useState({ title: "", ingredients: [], instructions: "", image: "" });
// //   const navigate = useNavigate();
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "ingredients") {
// //       const ingredientsArray = value.split("\n").map(item => item.trim());
// //       setNewRecipe({ ...newRecipe, [name]: ingredientsArray });
// //     } else {
// //       setNewRecipe({ ...newRecipe, [name]: value });
// //     }
// //   };
  
  
// //   const handleSave = async (e) => {
// //     e.preventDefault();
// //     if (newRecipe.title && newRecipe.ingredients.length && newRecipe.instructions) {
// //       console.log("Submitting recipe:", newRecipe);
// //       try {
// //         const response = await fetch("http://localhost:8080/api/recipes/post", {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             title: newRecipe.title,
// //             ingredients: newRecipe.ingredients.join("\n"), 
// //             instructions: newRecipe.instructions,
// //             imageUrl: newRecipe.image, 
// //           }),
// //         });
  
// //         if (!response.ok) {
// //           const errorText = await response.text();
// //           console.error("Response error:", errorText); 
// //           throw new Error("Network response was not ok");
// //         }
        
// //         const data = await response.json();
// //         console.log("Recipe saved:", data);
// //         navigate("/recipe");
// //       } catch (error) {
// //         alert("Failed to save recipe: " + error.message);
// //       }
// //     } else {
// //       alert("Please fill in all fields.");
// //     }
// //   };
  
// //   return (
// //     <div style={{display:"flex",flexDirection:"row"}}>
// //       <Sidebar/>
// //     <div className="add-recipe" style={{display:"flex",flexDirection:"column"}}>
// //       <h1>Add New Recipe</h1>
// //       <form onSubmit={handleSave}>
// //         <label>
// //           Title:
// //           <br></br>
// //           <input
// //             type="text"
// //             name="title"
// //             value={newRecipe.title}
// //             onChange={handleInputChange}
// //             style={{width:"400px"}}
// //             />
// //         </label>
// //         <label>
// //           Ingredients (one per line):
// //           <textarea
// //             name="ingredients"
// //             value={newRecipe.ingredients.join("\n")}
// //             onChange={handleInputChange}
// //             />
// //         </label>
// //         <label>
// //           Instructions
// //           <textarea
// //             name="instructions"
// //             value={newRecipe.instructions}
// //             onChange={handleInputChange}
// //             />
// //         </label>
// //         <label>
// //           Image URL:
// //           <br></br>
// //           <input
// //             type="text"
// //             name="image"
// //             value={newRecipe.image}
// //             onChange={handleInputChange}
// //             style={{width:"400px"}}
// //             />
// //         </label>
// //         <button type="submit" style={{marginLeft:"130px"}}>Save Recipe</button>
// //       </form>
// //     </div>
// //     </div>
// //   );
// // };

// // export default AddRecipe;
// import React, { useState, useContext } from "react";
// import '../css/AddRecipe.css';
// import { useNavigate } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import { UserContext } from "../contexts/UserContext"; 

// const AddRecipe = ({ addRecipe }) => {
//   const { userId } = useContext(UserContext);
//   const [newRecipe, setNewRecipe] = useState({ title: "", ingredients: [], instructions: "", image: "" });
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "ingredients") {
//       const ingredientsArray = value.split("\n").map(item => item.trim());
//       setNewRecipe({ ...newRecipe, [name]: ingredientsArray });
//     } else {
//       setNewRecipe({ ...newRecipe, [name]: value });
//     }
//   };

//   const handleSave = async (e) => {
//     e.preventDefault();
//     if (newRecipe.title && newRecipe.ingredients.length && newRecipe.instructions && userId) {
//       console.log("Submitting recipe:", newRecipe);
//       try {
//         const response = await fetch("http://localhost:8080/api/recipes/post", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             title: newRecipe.title,
//             ingredients: newRecipe.ingredients.join("\n"), 
//             instructions: newRecipe.instructions,
//             imageUrl: newRecipe.image,
//             userId,
//           }),
//         });

//         if (!response.ok) {
//           const errorText = await response.text();
//           console.error("Response error:", errorText); 
//           throw new Error("Network response was not ok");
//         }

//         const data = await response.json();
//         console.log("Recipe saved:", data);
//         navigate("/recipe");
//       } catch (error) {
//         alert("Failed to save recipe: " + error.message);
//       }
//     } else {
//       alert("Please fill in all fields.");
//     }
//   };

//   return (
//     <div style={{display:"flex",flexDirection:"row"}}>
//       <Sidebar/>
//       <div className="add-recipe" style={{display:"flex",flexDirection:"column"}}>
//         <h1>Add New Recipe</h1>
//         <form onSubmit={handleSave}>
//           <label>
//             Title:
//             <br></br>
//             <input
//               type="text"
//               name="title"
//               value={newRecipe.title}
//               onChange={handleInputChange}
//               style={{width:"400px"}}
//             />
//           </label>
//           <label>
//             Ingredients (one per line):
//             <textarea
//               name="ingredients"
//               value={newRecipe.ingredients.join("\n")}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Instructions
//             <textarea
//               name="instructions"
//               value={newRecipe.instructions}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Image URL:
//             <br></br>
//             <input
//               type="text"
//               name="image"
//               value={newRecipe.image}
//               onChange={handleInputChange}
//               style={{width:"400px"}}
//             />
//           </label>
//           <button type="submit" style={{marginLeft:"130px"}}>Save Recipe</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddRecipe;
import React, { useState, useContext, useEffect } from "react";
import '../css/AddRecipe.css';
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { UserContext } from "../context/UserContext"; 

const AddRecipe = ({ addRecipe }) => {
  const { userId } = useContext(UserContext); // Get user ID from context
  const [newRecipe, setNewRecipe] = useState({ title: "", ingredients: [], instructions: "", image: "" });
  const navigate = useNavigate();
  const [storedUserId, setStoredUserId] = useState(null); // State to store user ID from localStorage

  useEffect(() => {
    const userIdFromStorage = localStorage.getItem("userId"); // Get userId from localStorage
    if (userIdFromStorage) {
      setStoredUserId(userIdFromStorage);
    } else {
      console.error("User is not logged in");
      // Handle the case where the user is not logged in (you could redirect to login)
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      const ingredientsArray = value.split("\n").map(item => item.trim());
      setNewRecipe({ ...newRecipe, [name]: ingredientsArray });
    } else {
      setNewRecipe({ ...newRecipe, [name]: value });
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (newRecipe.title && newRecipe.ingredients.length && newRecipe.instructions && storedUserId) {
      console.log("Submitting recipe:", newRecipe);
      try {
        const response = await fetch("http://localhost:8080/api/recipes/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newRecipe.title,
            ingredients: newRecipe.ingredients.join("\n"), 
            instructions: newRecipe.instructions,
            imageUrl: newRecipe.image,
            userId: storedUserId, // Use userId from localStorage or context
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Response error:", errorText); 
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Recipe saved:", data);
        navigate("/recipe");
      } catch (error) {
        alert("Failed to save recipe: " + error.message);
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"row"}}>
      <Sidebar />
      <div className="add-recipe" style={{display:"flex",flexDirection:"column"}}>
        <h1>Add New Recipe</h1>
        <form onSubmit={handleSave}>
          <label>
            Title:
            <br />
            <input
              type="text"
              name="title"
              value={newRecipe.title}
              onChange={handleInputChange}
              style={{width:"400px"}}
            />
          </label>
          <label>
            Ingredients (one per line):
            <textarea
              name="ingredients"
              value={newRecipe.ingredients.join("\n")}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Instructions:
            <textarea
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Image URL:
            <br />
            <input
              type="text"
              name="image"
              value={newRecipe.image}
              onChange={handleInputChange}
              style={{width:"400px"}}
            />
          </label>
          <button type="submit" style={{marginLeft:"130px"}}>Save Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
