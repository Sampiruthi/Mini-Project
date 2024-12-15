// import React from "react";
// import "../css/Recipes.css";
// import instagram from '../images/insta.jpeg';
// import facebook from '../images/facebook.jpg';
// import youtube from '../images/youtube.jpeg';
// import logo from '../images/logo.jpg';
// const recipes = [
//   {
//     title: "Lemon Cake",
//     ingredients: [
//       "2 cups all-purpose flour",
//       "1 cup sugar",
//       "1/2 cup butter",
//       "2 eggs",
//       "1 lemon (zested and juiced)",
//     ],
//     instructions: [
//       "Preheat the oven: Set your oven to 350°F (175°C). While the oven is heating up, prepare your baking pan by greasing it with butter or lining it with parchment paper to prevent the cake from sticking.",
//       "Cream the butter and sugar: In a large mixing bowl, combine the butter and sugar. Use an electric mixer or a wooden spoon to cream them together until the mixture becomes light, fluffy, and pale in color. This step incorporates air into the batter, helping the cake to rise and have a soft texture.",

//       "Add the eggs and lemon zest: Crack the eggs into a separate bowl and then add them one at a time to the butter-sugar mixture, beating well after each addition. This ensures the eggs are evenly mixed. After the eggs are incorporated, stir in the lemon zest, which adds bright citrus flavor to the cake.",

//       "Combine flour and lemon juice: Gradually add the all-purpose flour to the mixture. Alternate between adding the flour and the freshly squeezed lemon juice in small amounts. Begin and end with the flour. Gently fold the ingredients together using a spatula or wooden spoon. Be careful not to overmix, as this could make the cake dense.",

//       "Pour into the pan: Once the batter is mixed, pour it into your prepared cake pan. Use a spatula to spread the batter evenly in the pan.",

//       "Bake the cake: Place the pan in the preheated oven and bake for 25-30 minutes. The cake is ready when the top turns golden and a toothpick inserted in the center comes out clean or with just a few moist crumbs.",

//       "Cool the cake: Remove the cake from the oven and let it cool in the pan for about 10-15 minutes. Then, transfer it to a wire rack to cool completely before serving."
//     ],
//     image: "https://thumbs.dreamstime.com/b/lemon-cake-12973826.jpg",
//   },
// ];

// const Recipes = () => {
//   return (
//     <div>
//       <nav className="navbar">
//       <div className="container">
//         <a href="/" className="logo">
//           <img src={logo} alt="Website Logo" style={{ width: '150px' }} />
//         </a>
//         <ul className="nav-links">
//           <li><a href="#features">Features</a></li>
//           <li><a href="#pricing">Pricing</a></li>
//           <li><a href="#templates">Templates</a></li>
//           <li><a href="#contact">Contact</a></li>
//           <li><a href="#signup" className="btn">Sign Up</a></li>
//           <li><a href="#login" className="btn">Log In</a></li>
//         </ul>
//       </div>
//     </nav>
//     <div className="recipe-book">
//       <header className="recipe-book-header">
//         <h1>Recipe Book</h1>
//       </header>
//       <div className="recipe-list">
//         {recipes.map((recipe, index) => (
//           <div className="recipe-card" key={index}>
//             <img src={recipe.image} alt={recipe.title} className="recipe-image" />
//             <h2>{recipe.title}</h2>
//             <h3>Ingredients</h3>
//             <ul>
//               {recipe.ingredients.map((ingredient, idx) => (
//                 <li key={idx}>{ingredient}</li>
//               ))}
//             </ul>
//             <h3>Instructions</h3>
//             <ol>
//               {recipe.instructions.map((instruction, idx) => (
//                 <li key={idx}>{instruction}</li>
//               ))}
//             </ol>
//           </div>
//         ))}
//       </div>
//     </div>
//     <footer>
//       <div className="container footer-grid">
//         <div className="footer-column">
//           <h4>Company</h4>
//           <ul>
//             <li><a href="#about">About us</a></li>
//             <li><a href="#careers">Careers</a></li>
//             <li><a href="#security">Security</a></li>
//             <li><a href="#status">Status</a></li>
//             <li><a href="#terms">Terms & privacy</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Download</h4>
//           <ul>
//             <li><a href="#ios">iOS & Android</a></li>
//             <li><a href="#mac-windows">Mac & Windows</a></li>
//             <li><a href="#calendar">Calendar</a></li>
//             <li><a href="#web-clipper">Web Clipper</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>Resources</h4>
//           <ul>
//             <li><a href="#help">Help center</a></li>
//             <li><a href="#pricing">Pricing</a></li>
//             <li><a href="#blog">Blog</a></li>
//             <li><a href="#community">Community</a></li>
//             <li><a href="#integrations">Integrations</a></li>
//             <li><a href="#templates">Templates</a></li>
//             <li><a href="#affiliates">Affiliates</a></li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h4>JotDown for</h4>
//           <ul>
//             <li><a href="#enterprise">Enterprise</a></li>
//             <li><a href="#small-business">Small business</a></li>
//             <li><a href="#personal">Personal</a></li>
//           </ul>
//         </div>
//       </div>

//       <div className="social-media">
//         <a href="#instagram"><img src={instagram} alt="Instagram" /></a>
//         {/* <a href="#twitter"><img src={twitter} alt="Twitter" /></a> */}
//         <a href="#facebook"><img src={facebook} alt="Facebook" /></a>
//         <a href="#youtube"><img src={youtube} alt="YouTube" /></a>
//         {/* <a href="#linkedin"><img src={google} alt="LinkedIn" /></a> */}
//       </div>

//       <div className="footer-bottom">
//         <p>&copy; 2024 Jotdown-like. All Rights Reserved.</p>
//         <p>Do Not Sell or Share My Info</p>
//         <p><a href="#cookie-settings">Cookie settings</a></p>
//         <p>&copy; 2024 Jotdown Labs, Inc.</p>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Recipes;