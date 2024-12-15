// import React, { useState, useEffect } from 'react';
// import '../css/Todolist.css';
// import Sidebar from './Sidebar';

// const ToDoList = () => {
//     const [tasks, setTasks] = useState([]);
//     const [taskInput, setTaskInput] = useState('');
//     const [descriptionInput, setDescriptionInput] = useState('');
//     const [dueDateInput, setDueDateInput] = useState(new Date().toISOString().split('T')[0]);
//     const [fromTimeInput, setFromTimeInput] = useState('');
//     const [toTimeInput, setToTimeInput] = useState('');
//     const [priorityInput, setPriorityInput] = useState('Low');

//     useEffect(() => {
//         fetchTasks();
//     }, []);

//     const fetchTasks = async () => {
//         try {
//             const response = await fetch('http://localhost:8080/tasks'); 
//             const data = await response.json();
//             setTasks(sortTasksByPriority(data));
//         } catch (error) {
//             console.error('Error fetching tasks:', error);
//         }
//     };

//     const handleInputChange = (event) => {
//         setTaskInput(event.target.value);
//     };

//     const handleDescriptionChange = (event) => {
//         setDescriptionInput(event.target.value);
//     };

//     const handleFromTimeChange = (event) => {
//         setFromTimeInput(event.target.value);
//     };

//     const handleToTimeChange = (event) => {
//         setToTimeInput(event.target.value);
//     };

//     const handlePriorityChange = (event) => {
//         setPriorityInput(event.target.value);
//     };

//     const handleAddTask = async () => {
//         if (taskInput.trim() === '' || descriptionInput.trim() === '' || fromTimeInput === '' || toTimeInput === '') {
//             alert('Please fill all the fields before adding a task.');
//             return;
//         }

//         const newTask = {
//             title: taskInput,
//             description: descriptionInput,
//             dueDate: dueDateInput,
//             fromTime: fromTimeInput,
//             toTime: toTimeInput,
//             priority: priorityInput,
//             completed: false,
//         };

//         try {
//             const response = await fetch('http://localhost:8080/tasks', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(newTask),
//             });
//             const createdTask = await response.json();
//             setTasks((prevTasks) => sortTasksByPriority([...prevTasks, createdTask]));
//             resetInputs();
//         } catch (error) {
//             console.error('Error adding task:', error);
//         }
//     };

//     const handleRemoveTask = async (id) => {
//         try {
//             await fetch(`http://localhost:8080/tasks/${id}`, {
//                 method: 'DELETE',
//             });
//             setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
//         } catch (error) {
//             console.error('Error removing task:', error);
//         }
//     };

//     const handleToggleComplete = async (index) => {
//         const updatedTasks = tasks.map((task, i) => {
//             if (i === index) {
//                 return { ...task, completed: !task.completed };
//             }
//             return task;
//         });
//         setTasks(sortTasksByPriority(updatedTasks));
//     };

//     const sortTasksByPriority = (taskList) => {
//         const priorityValues = { 'High': 1, 'Medium': 2, 'Low': 3 };
//         return taskList.sort((a, b) => priorityValues[a.priority] - priorityValues[b.priority]);
//     };

//     const resetInputs = () => {
//         setTaskInput('');
//         setDescriptionInput('');
//         setDueDateInput(new Date().toISOString().split('T')[0]);
//         setFromTimeInput('');
//         setToTimeInput('');
//         setPriorityInput('Low');
//     };

//     const totalTasks = tasks.length;
//     const completedTasks = tasks.filter(task => task.completed).length;
//     const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

//     return (
//         <div style={{ display: "flex", flexDirection: "row" }}>
//             <Sidebar />
//             <div style={{ display: "flex", flexDirection: "column", width: '100%', marginBottom: '20px' }}>
//                 <div className="progress-container" style={{ width: '100%', marginBottom: '20px' }}>
//                     <div
//                         className="progress-bar"
//                         style={{
//                             width: `${progressPercentage}%`,
//                             height: '5px',
//                             backgroundColor: progressPercentage === 100 ? 'green' : '#007bff',
//                             transition: 'width 0.3s ease'
//                         }}
//                     />
//                 </div>
//                 <div className="todolist-container" style={{ height: "600px", width: "600px", marginTop: "50px", display: "flex", flexDirection: "column" }}>
//                     <h1 style={{ textAlign: 'center' }}>Your To-Do List</h1>
//                     <div className="input-container" style={{ display: "flex", flexDirection: "column" }}>
//                         <input
//                             type="text"
//                             value={taskInput}
//                             onChange={handleInputChange}
//                             placeholder="Task Title"
//                             style={{width:"300px"}}
//                         />
//                         <input
//                             type="text"
//                             value={descriptionInput}
//                             onChange={handleDescriptionChange}
//                             placeholder="Description"
//                             style={{width:"300px"}}
//                         />
//                         <input
//                             type="date"
//                             value={dueDateInput}
//                             onChange={(e) => setDueDateInput(e.target.value)}
//                         />
//                         <input
//                             type="time"
//                             value={fromTimeInput}
//                             onChange={handleFromTimeChange}
//                             placeholder="From Time"
//                         />
//                         <input
//                             type="time"
//                             value={toTimeInput}
//                             onChange={handleToTimeChange}
//                             placeholder="To Time"
//                         />
//                         <select value={priorityInput} onChange={handlePriorityChange}>
//                             <option value="Low">Low</option>
//                             <option value="Medium">Medium</option>
//                             <option value="High">High</option>
//                         </select>
//                         <button onClick={handleAddTask} style={{ marginTop: "20px" }}>Add Task</button>
//                     </div>

//                     <ul className="task-list" style={{ marginTop: "140px" }}>
//                         {tasks.map((task, index) => (
//                             <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
//                                 <input
//                                     type="checkbox"
//                                     checked={task.completed}
//                                     onChange={() => handleToggleComplete(index)}
//                                 />
//                                 <div style={{ marginLeft: "10px" }}>
//                                     <strong>{task.title}</strong> (From: {task.fromTime} To: {task.toTime})<br />
//                                     <span>{task.description}</span><br />
//                                     <em>Priority: {task.priority}</em>
//                                 </div>
//                                 <button onClick={() => handleRemoveTask(task.id)} style={{ marginLeft: "100px" }}>Remove</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ToDoList;
import React, { useState, useEffect, useContext } from 'react';
import '../css/Todolist.css';
import Sidebar from './Sidebar';
import { UserContext } from '../context/UserContext'; // Import UserContext

const ToDoList = () => {
    // const { userId } = useContext(UserContext); // Access userId from context
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [dueDateInput, setDueDateInput] = useState(new Date().toISOString().split('T')[0]);
    const [fromTimeInput, setFromTimeInput] = useState('');
    const [toTimeInput, setToTimeInput] = useState('');
    const [priorityInput, setPriorityInput] = useState('Low');
    const [userId, setUserId] = useState(null);
    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (!storedUserId) {
            // Handle case where user is not logged in
            console.error("User not logged in");
        } else {
            setUserId(storedUserId);
            fetchTasks();
        }
    }, [userId]);

    const fetchTasks = async () => {
        try {
            const response = await fetch(`http://localhost:8080/tasks/get/${userId}`); 
            const data = await response.json();
            setTasks(sortTasksByPriority(data));
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescriptionInput(event.target.value);
    };

    const handleFromTimeChange = (event) => {
        setFromTimeInput(event.target.value);
    };

    const handleToTimeChange = (event) => {
        setToTimeInput(event.target.value);
    };

    const handlePriorityChange = (event) => {
        setPriorityInput(event.target.value);
    };

    const handleAddTask = async () => {
        if (taskInput.trim() === '' || descriptionInput.trim() === '' || fromTimeInput === '' || toTimeInput === '') {
            alert('Please fill all the fields before adding a task.');
            return;
        }

        const newTask = {
            title: taskInput,
            description: descriptionInput,
            dueDate: dueDateInput,
            fromTime: fromTimeInput,
            toTime: toTimeInput,
            priority: priorityInput,
            completed: false,
        };

        try {
            const response = await fetch(`http://localhost:8080/tasks/post/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTask),
            });
            const createdTask = await response.json();
            setTasks((prevTasks) => sortTasksByPriority([...prevTasks, createdTask]));
            resetInputs();
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const handleRemoveTask = async (id) => {
        try {
            await fetch(`http://localhost:8080/tasks/${userId}/${id}`, {
                method: 'DELETE',
            });
            setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error removing task:', error);
        }
    };

    const handleToggleComplete = async (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(sortTasksByPriority(updatedTasks));
    };

    const sortTasksByPriority = (taskList) => {
        const priorityValues = { 'High': 1, 'Medium': 2, 'Low': 3 };
        return taskList.sort((a, b) => priorityValues[a.priority] - priorityValues[b.priority]);
    };

    const resetInputs = () => {
        setTaskInput('');
        setDescriptionInput('');
        setDueDateInput(new Date().toISOString().split('T')[0]);
        setFromTimeInput('');
        setToTimeInput('');
        setPriorityInput('Low');
    };

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <div style={{ display: "flex", flexDirection: "column", width: '100%', marginBottom: '20px' }}>
                <div className="progress-container" style={{ width: '100%', marginBottom: '20px' }}>
                    <div
                        className="progress-bar"
                        style={{
                            width: `${progressPercentage}%`,
                            height: '5px',
                            backgroundColor: progressPercentage === 100 ? 'green' : '#007bff',
                            transition: 'width 0.3s ease'
                        }}
                    />
                </div>
                <div className="todolist-container" style={{ height: "600px", width: "600px", marginTop: "50px", display: "flex", flexDirection: "column" }}>
                    <h1 style={{ textAlign: 'center' }}>Your To-Do List</h1>
                    <div className="input-container" style={{ display: "flex", flexDirection: "column" }}>
                        <input
                            type="text"
                            value={taskInput}
                            onChange={handleInputChange}
                            placeholder="Task Title"
                            style={{width:"300px"}}
                        />
                        <input
                            type="text"
                            value={descriptionInput}
                            onChange={handleDescriptionChange}
                            placeholder="Description"
                            style={{width:"300px"}}
                        />
                        <input
                            type="date"
                            value={dueDateInput}
                            onChange={(e) => setDueDateInput(e.target.value)}
                        />
                        <input
                            type="time"
                            value={fromTimeInput}
                            onChange={handleFromTimeChange}
                            placeholder="From Time"
                        />
                        <input
                            type="time"
                            value={toTimeInput}
                            onChange={handleToTimeChange}
                            placeholder="To Time"
                        />
                        <select value={priorityInput} onChange={handlePriorityChange}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                        <button onClick={handleAddTask} style={{ marginTop: "20px" }}>Add Task</button>
                    </div>

                    <ul className="task-list" style={{ marginTop: "140px" }}>
                        {tasks.map((task, index) => (
                            <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleToggleComplete(index)}
                                />
                                <div style={{ marginLeft: "10px" }}>
                                    <strong>{task.title}</strong> (From: {task.fromTime} To: {task.toTime})<br />
                                    <span>{task.description}</span><br />
                                    <em>Priority: {task.priority}</em>
                                </div>
                                <button onClick={() => handleRemoveTask(task.id)} style={{ marginLeft: "100px" }}>Remove</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
