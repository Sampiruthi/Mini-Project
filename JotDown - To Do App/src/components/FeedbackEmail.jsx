import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const FeedbackEmail = () => {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch contact details from backend
        fetch('http://localhost:8080/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    const handleSendEmail = async (contact) => {
        // Email sending simulation
        const subject = 'Regarding Your Inquiry';
        const body = 'Hello,\n\nThank you for your inquiry. We will get back to you soon.';
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);
        const mailtoLink = `mailto:${encodeURIComponent(contact.email)}?subject=${encodedSubject}&body=${encodedBody}`;

        // Open mail client
        window.open(mailtoLink, '_blank');

        // Update contact as verified in backend
        try {
            const response = await fetch(`http://localhost:8080/contacts/${contact.id}/verify`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ verified: true })
            });

            if (response.ok) {
                // Update local state with the updated contact verified status
                setContacts(contacts.map(c =>
                    c.id === contact.id ? { ...c, verified: true } : c
                ));
            } else {
                alert('Failed to verify the contact');
            }
        } catch (error) {
            console.error('Error verifying contact:', error);
        }
    };

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div style={{display:"flex",flexDirection:"row"}}>
            <AdminSidebar/>
            <div className="contact-list">
                <button className="close-button" onClick={handleNavigateHome}>X</button>
                <h1>Feedback/Support</h1>
                <style>{`
                    .contact-list {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        color: black;
                        position: relative;
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

                    h1 {
                        text-align: center;
                        margin-bottom: 20px;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }

                    table, th, td {
                        border: 1px solid #ddd;
                    }

                    th, td {
                        padding: 8px;
                        text-align: left;
                    }

                    th {
                        background-color: #f2f2f2;
                    }

                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }

                    button {
                        background-color: #4CAF50;
                        border: none;
                        color: white;
                        padding: 10px 20px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        cursor: pointer;
                    }

                    button:hover {
                        background-color: #45a049;
                    }
                `}</style>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                            <th>Verified</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.email}</td>
                                <td>{contact.subject}</td>
                                <td>{contact.message}</td>
                                <td>{contact.verified ? 'Yes' : 'No'}</td>
                                <td>
                                    <button
                                        onClick={() => handleSendEmail(contact)}
                                        disabled={contact.verified}
                                    >
                                        Send Email
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FeedbackEmail;
