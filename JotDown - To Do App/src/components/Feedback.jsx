// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';

// const Feedback = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         subject: '',
//         message: '',
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleNavigateHome = () => {
//         navigate('/firstpage');
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:8080/contacts', formData);
//             alert('Feedback sent successfully!');
//             setFormData({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 subject: '',
//                 message: '',
//             });
//         } catch (error) {
//             console.error('There was an error!', error);
//             alert('Failed to send message.');
//         }
//     };

//     return (
//         <div className='xxx' style={{ display: "flex", flexDirection: "row" }}>
//             <Sidebar />
//             <div className="contact-form">
//                 <button className="close-button" onClick={handleNavigateHome}>X</button>
//                 <style>
//                     {`
//           /* Feedback Form Styling */
//           .contact-form {
//             width: 100%;
//             max-width: 600px;
//             margin: 50px auto;
//             background: #f8f9fa;
//             padding: 30px;
//             border-radius: 8px;
//             box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//             font-family: 'Arial', sans-serif;
//           }
//           .close-button {
//             position: absolute;
//             top: 10px;
//             right: 10px;
//             background-color: #2d3748;
//             color: white;
//             border: none;
//             padding: 5px 10px;
//             cursor: pointer;
//             font-size: 16px;
//             }
//             .close-button:hover {
//                 background-color: darkred;
//                 }
                
//                 .contact-form h2 {
//                     text-align: center;
//                     color: #333;
//                     margin-bottom: 20px;
//                     }
                    
//                     .form-group {
//                         margin-bottom: 20px;
//                         }
                        
//                         label {
//                             font-weight: bold;
//                             margin-bottom: 8px;
//             display: inline-block;
//             color: #555;
//             }
          
//             input[type="text"],
//             input[type="email"],
//             textarea {
//                 width: 100%;
//                 padding: 12px 15px;
//                 border: 1px solid #ccc;
//                 border-radius: 6px;
//                 box-sizing: border-box;
//                 font-size: 16px;
//                 color: #333;
//                 background-color: #fff;
//                 transition: border-color 0.3s ease-in-out;
//                 }
                
//                 input[type="text"]:focus,
//           input[type="email"]:focus,
//           textarea:focus {
//             border-color: #ff9800;
//             outline: none;
//             }
            
//             textarea {
//                 resize: vertical;
//                 min-height: 150px;
//                 }
                
//                 button[type="submit"] {
//                     display: inline-block;
//                     width: 100%;
//                     padding: 12px;
//                     background-color: #ff9800;
//                     color: white;
//                     font-size: 18px;
//                     border: none;
//                     border-radius: 6px;
//                     cursor: pointer;
//                     transition: background-color 0.3s ease-in-out;
//                     }
                    
//                     button[type="submit"]:hover {
//                         background-color: #e68900;
//                         }
                        
//                         button[type="submit"]:active {
//                             transform: scale(0.98);
//                             }
                            
//                             @media (max-width: 768px) {
//                                 .contact-form {
//                                     padding: 20px;
//                                     margin: 20px;
//                                     }
                                    
//                                     label {
//                                         font-size: 14px;
//                                         }
                                        
//                                         input[type="text"],
//                                         input[type="email"],
//                                         textarea {
//                                             font-size: 14px;
//                                             }
        
//                                             button[type="submit"] {
//               font-size: 16px;
//               }
//           }
//         `}
//                 </style>
//                 <h2>Contact Us</h2> {/* Added a header for better UX */}
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label>First Name</label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required // Added required attribute for validation
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Last Name</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Subject</label>
//                         <input
//                             type="text"
//                             name="subject"
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Message</label>
//                         <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleChange}
//                             required
//                         ></textarea>
//                     </div>
//                     <button type="submit">Send Message</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Feedback;
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { UserContext } from '../context/UserContext'; // Import UserContext

const Feedback = () => {
    const { mail } = useContext(UserContext); // Access the email from UserContext
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (mail) {
            setFormData((prevData) => ({
                ...prevData,
                email: mail, // Set email field from UserContext
            }));
        }
    }, [mail]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleNavigateHome = () => {
        navigate('/firstpage');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/contacts', formData);
            alert('Feedback sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: mail, // Reset to mail from UserContext
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('There was an error!', error);
            alert('Failed to send message.');
        }
    };

    return (
        <div className='xxx' style={{ display: "flex", flexDirection: "row" }}>
            <Sidebar />
            <div className="contact-form">
                <button className="close-button" onClick={handleNavigateHome}>X</button>
                <style>
                    {`
          /* Feedback Form Styling */
          .contact-form {
            width: 100%;
            max-width: 600px;
            margin: 50px auto;
            background: #f8f9fa;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            font-family: 'Arial', sans-serif;
          }
          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #2d3748;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            font-size: 16px;
            }
            .close-button:hover {
                background-color: darkred;
                }
                
                .contact-form h2 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 20px;
                    }
                    
                    .form-group {
                        margin-bottom: 20px;
                        }
                        
                        label {
                            font-weight: bold;
                            margin-bottom: 8px;
            display: inline-block;
            color: #555;
            }
          
            input[type="text"],
            input[type="email"],
            textarea {
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ccc;
                border-radius: 6px;
                box-sizing: border-box;
                font-size: 16px;
                color: #333;
                background-color: #fff;
                transition: border-color 0.3s ease-in-out;
                }
                
                input[type="text"]:focus,
          input[type="email"]:focus,
          textarea:focus {
            border-color: #ff9800;
            outline: none;
            }
            
            textarea {
                resize: vertical;
                min-height: 150px;
                }
                
                button[type="submit"] {
                    display: inline-block;
                    width: 100%;
                    padding: 12px;
                    background-color: #ff9800;
                    color: white;
                    font-size: 18px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: background-color 0.3s ease-in-out;
                    }
                    
                    button[type="submit"]:hover {
                        background-color: #e68900;
                        }
                        
                        button[type="submit"]:active {
                            transform: scale(0.98);
                            }
                            
                            @media (max-width: 768px) {
                                .contact-form {
                                    padding: 20px;
                                    margin: 20px;
                                    }
                                    
                                    label {
                                        font-size: 14px;
                                        }
                                        
                                        input[type="text"],
                                        input[type="email"],
                                        textarea {
                                            font-size: 14px;
                                            }
        
                                            button[type="submit"] {
              font-size: 16px;
              }
          }
        `}
                </style>
                <h2>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Feedback;
