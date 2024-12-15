// import React, { useState } from 'react';
// import '../css/MealPlanner.css';
// import Sidebar from './Sidebar';

// const Meal = () => {
//     const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     const [mealPlan, setMealPlan] = useState({});
//     const [savedPlans, setSavedPlans] = useState([]);

//     const handleInputChange = (meal, day, value) => {
//         setMealPlan(prev => ({
//             ...prev,
//             [`${meal}-${day}`]: value,
//         }));
//     };

//     const handleSave = () => {
//         const filledMeals = Object.keys(mealPlan).reduce((acc, key) => {
//             if (mealPlan[key]) {
//                 acc[key] = mealPlan[key];
//             }
//             return acc;
//         }, {});

//         setSavedPlans([...savedPlans, filledMeals]);
//     };

//     const handleClear = () => {
//         setMealPlan({});
//     };

//     return (
//         <div style={{display:"flex",flexDirection:"row"}}>
//             <Sidebar/>
//             <div className="meal-planner">
//                 <h1>Weekly Meal Planner</h1>
//                 <div className="meal-grid">
//                     {meals.map((meal) => (
//                         <div key={meal} className="meal-column">
//                             <h2>{meal}</h2>
//                             {days.map((day) => (
//                                 <div key={day} className="meal-item">
//                                     <input
//                                         type="text"
//                                         placeholder={`${meal} on ${day}`}
//                                         value={mealPlan[`${meal}-${day}`] || ''}
//                                         onChange={(e) => handleInputChange(meal, day, e.target.value)}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//                 <button className="save-btn" onClick={handleSave}>Save Meal Plan</button>
//                 <button className="clear-btn" onClick={handleClear}>Clear</button>

//                 <div className="saved-plans">
//                     <h2>Saved Meal Plans</h2>
//                     {savedPlans.map((plan, index) => (
//                         <div key={index} className="saved-plan">
//                             {Object.entries(plan).map(([key, value]) => (
//                                 <p key={key}>{key}: {value}</p>
//                             ))}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Meal;
// import React, { useState } from 'react';
// import '../css/MealPlanner.css';
// import Sidebar from './Sidebar';

// const Meal = () => {
//     const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//     const [mealPlan, setMealPlan] = useState({});
//     const [savedPlans, setSavedPlans] = useState([]);
//     const [error, setError] = useState('');

//     const handleInputChange = (meal, day, value) => {
//         setMealPlan(prev => ({
//             ...prev,
//             [`${meal}-${day}`]: value,
//         }));
//     };

//     const handleSave = () => {
//         // Check if all fields are filled
//         const missingFields = meals.flatMap((meal) =>
//             days.map((day) => `${meal}-${day}`).filter((key) => !mealPlan[key])
//         );

//         if (missingFields.length > 0) {
//             setError('Please fill all meal fields.');
//             return;
//         }

//         setError(''); // Clear any previous error

//         const filledMeals = Object.keys(mealPlan).reduce((acc, key) => {
//             if (mealPlan[key]) {
//                 acc[key] = mealPlan[key];
//             }
//             return acc;
//         }, {});

//         setSavedPlans([...savedPlans, filledMeals]);
//     };

//     const handleClear = () => {
//         setMealPlan({});
//     };

//     return (
//         <div style={{ display: "flex", flexDirection: "row" }}>
//             <Sidebar />
//             <div className="meal-planner">
//                 <h1>Weekly Meal Planner</h1>

//                 {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

//                 <div className="meal-grid">
//                     {meals.map((meal) => (
//                         <div key={meal} className="meal-column">
//                             <h2>{meal}</h2>
//                             {days.map((day) => (
//                                 <div key={day} className="meal-item">
//                                     <input
//                                         type="text"
//                                         placeholder={`${meal} on ${day}`}
//                                         value={mealPlan[`${meal}-${day}`] || ''}
//                                         onChange={(e) => handleInputChange(meal, day, e.target.value)}
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                 </div>

//                 <button className="save-btn" onClick={handleSave}>Save Meal Plan</button>
//                 <button className="clear-btn" onClick={handleClear}>Clear</button>

//                 <div className="saved-plans">
//                     <h2>Saved Meal Plans</h2>
//                     {savedPlans.length > 0 ? (
//                         savedPlans.map((plan, index) => (
//                             <div key={index} className="saved-plan-card">
//                                 <h3>Meal Plan {index + 1}</h3>
//                                 <div className="meal-plan-details">
//                                     {days.map((day) => (
//                                         <div key={day} className="meal-plan-card">
//                                             <h4>{day}</h4>
//                                             {meals.map((meal) => {
//                                                 const mealKey = `${meal}-${day}`;
//                                                 return (
//                                                     <div key={mealKey} className="meal-info">
//                                                         <strong>{meal}:</strong> {plan[mealKey] || 'Not provided'}
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No saved meal plans yet.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Meal;
import React, { useState, useEffect } from 'react';
import '../css/MealPlanner.css';
import Sidebar from './Sidebar';

const Meal = () => {
    const meals = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [mealPlan, setMealPlan] = useState({});
    const [savedPlans, setSavedPlans] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        // Load saved meal plans from localStorage on component mount
        const storedPlans = JSON.parse(localStorage.getItem('mealPlans')) || [];
        setSavedPlans(storedPlans);
    }, []);

    const handleInputChange = (meal, day, value) => {
        setMealPlan(prev => ({
            ...prev,
            [`${meal}-${day}`]: value,
        }));
    };

    const handleSave = () => {
        // Check if all fields are filled
        const missingFields = meals.flatMap((meal) =>
            days.map((day) => `${meal}-${day}`).filter((key) => !mealPlan[key])
        );

        if (missingFields.length > 0) {
            setError('Please fill all meal fields.');
            return;
        }

        setError(''); // Clear any previous error

        const filledMeals = Object.keys(mealPlan).reduce((acc, key) => {
            if (mealPlan[key]) {
                acc[key] = mealPlan[key];
            }
            return acc;
        }, {});

        const updatedPlans = [...savedPlans, filledMeals];

        // Save the updated plans to localStorage
        localStorage.setItem('mealPlans', JSON.stringify(updatedPlans));

        setSavedPlans(updatedPlans);
    };

    const handleClear = () => {
        setMealPlan({});
    };

    const handleDelete = (index) => {
        // Remove the meal plan at the specified index
        const updatedPlans = savedPlans.filter((_, i) => i !== index);

        // Update localStorage after deleting a plan
        localStorage.setItem('mealPlans', JSON.stringify(updatedPlans));

        setSavedPlans(updatedPlans);
    };

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <div className="meal-planner">
                <h1>Weekly Meal Planner</h1>

                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                <div className="meal-grid">
                    {meals.map((meal) => (
                        <div key={meal} className="meal-column">
                            <h2>{meal}</h2>
                            {days.map((day) => (
                                <div key={day} className="meal-item">
                                    <input
                                        type="text"
                                        placeholder={`${meal} on ${day}`}
                                        value={mealPlan[`${meal}-${day}`] || ''}
                                        onChange={(e) => handleInputChange(meal, day, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <button className="save-btn" onClick={handleSave}>Save Meal Plan</button>
                <button className="clear-btn" onClick={handleClear}>Clear</button>

                <div className="saved-plans">
                    <h2>Saved Meal Plans</h2>
                    {savedPlans.length > 0 ? (
                        savedPlans.map((plan, index) => (
                            <div key={index} className="saved-plan-card">
                                <h3>Meal Plan {index + 1}</h3>
                                <div className="meal-plan-details">
                                    {days.map((day) => (
                                        <div key={day} className="meal-plan-card">
                                            <h4>{day}</h4>
                                            {meals.map((meal) => {
                                                const mealKey = `${meal}-${day}`;
                                                return (
                                                    <div key={mealKey} className="meal-info">
                                                        <strong>{meal}:</strong> {plan[mealKey] || 'Not provided'}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className="delete-btn" style={{height:"55px"}}
                                    onClick={() => handleDelete(index)}
                                >
                                    Delete Meal Plan
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No saved meal plans yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Meal;
