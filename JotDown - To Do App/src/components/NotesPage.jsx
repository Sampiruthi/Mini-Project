// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios"; 
// import {
//     Box,
//     Typography,
//     TextField,
//     Button,
//     IconButton,
//     List,
//     ListItem,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import Sidebar from "./Sidebar"; 

// function NotesPage() {
//     const [notes, setNotes] = useState([]);
//     const [currentNote, setCurrentNote] = useState("");
//     const [editIndex, setEditIndex] = useState(null);

//     useEffect(() => {
//         axios.get("http://localhost:8080/api/notes")
//             .then(response => setNotes(response.data))
//             .catch(error => console.error("Error fetching notes:", error));
//     }, []);

//     const handleNoteChange = useCallback((event) => {
//         setCurrentNote(event.target.value);
//     }, []);
//     const saveNote = useCallback(() => {
//         const trimmedNote = currentNote.trim();
//         if (trimmedNote === "") return;
    
//         if (editIndex !== null) {
//             const noteToUpdate = notes[editIndex];
//             axios.put(`http://localhost:8080/api/notes/${noteToUpdate.id}`, { content: trimmedNote })
//                 .then(response => {
//                     if (response.data) {
//                         setNotes(prevNotes => {
//                             const updatedNotes = [...prevNotes];
//                             updatedNotes[editIndex] = response.data; 
//                             return updatedNotes;
//                         });
//                         setEditIndex(null);
//                         setCurrentNote("");
//                     }
//                 })
//                 .catch(error => console.error("Error updating note:", error));
//         } else {
//             axios.post("http://localhost:8080/api/notes", { content: trimmedNote })
//                 .then(response => {
//                     setNotes(prevNotes => [...prevNotes, response.data]);
//                     setCurrentNote("");
//                 })
//                 .catch(error => console.error("Error saving note:", error));
//         }
//     }, [currentNote, editIndex, notes]);
    
//     const deleteNote = useCallback((index) => {
//         const noteToDelete = notes[index];
//         axios.delete(`http://localhost:8080/api/notes/${noteToDelete.id}`)
//             .then(() => {
//                 setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
//                 if (editIndex === index) {
//                     setEditIndex(null);
//                     setCurrentNote("");
//                 }
//             })
//             .catch(error => console.error("Error deleting note:", error));
//     }, [editIndex, notes]);

//     const editNote = useCallback((index) => {
//         setCurrentNote(notes[index].content);
//         setEditIndex(index);
//     }, [notes]);

//     return (
//         <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#F0F0F0", color: "#333" }}>
//             <Sidebar />
//             <Box sx={{ flexGrow: 1, padding: "40px", backgroundColor: "#f5f5f5", color: "#333333" }}>
//                 <Typography variant="h4" gutterBottom>
//                     Your Notes
//                 </Typography>

//                 <TextField
//                     fullWidth
//                     multiline
//                     rows={4}
//                     variant="outlined"
//                     value={currentNote}
//                     onChange={handleNoteChange}
//                     placeholder="Type your notes here..."
//                     sx={{
//                         backgroundColor: "#ffffff",
//                         color: "#333333",
//                         borderRadius: "8px",
//                         marginBottom: "20px",
//                         "& .MuiOutlinedInput-root": {
//                             "& fieldset": {
//                                 borderColor: "#cccccc",
//                             },
//                             "&:hover fieldset": {
//                                 borderColor: "#999999",
//                             },
//                             "&.Mui-focused fieldset": {
//                                 borderColor: "#666666",
//                             },
//                         },
//                         "& input::placeholder": {
//                             color: "#999999",
//                             opacity: 1,
//                         },
//                         "& textarea::placeholder": {
//                             color: "#999999",
//                             opacity: 1,
//                         },
//                         "& .MuiInputBase-input": {
//                             color: "#333333",
//                         },
//                     }}
//                 />

//                 <Button
//                     variant="contained"
//                     sx={{
//                         backgroundColor: "#007BFF",
//                         color: "#FFFFFF",
//                         borderRadius: "8px",
//                         width:"200px",
//                         padding: "10px 20px",
//                         "&:hover": {
//                             backgroundColor: "#0056b3",
//                         },
//                     }}
//                     onClick={saveNote}
//                     disabled={currentNote.trim() === ""}
//                 >
//                     {editIndex !== null ? "Update Note" : "Save Note"}
//                 </Button>

//                 <Typography variant="h5" gutterBottom sx={{ marginTop: "30px" }}>
//                     Saved Notes
//                 </Typography>
//                 <List
//                     sx={{
//                         backgroundColor: "#ffffff",
//                         borderRadius: "8px",
//                         maxHeight: "60vh",
//                         overflowY: "auto",
//                         padding: 0,
//                     }}
//                 >
//                     {notes.length > 0 ? (
//                         notes.map((note, index) => (
//                             <ListItem
//                                 key={index}
//                                 sx={{
//                                     backgroundColor: "#f9f9f9",
//                                     borderBottom: "1px solid #eeeeee",
//                                     "&:hover": { backgroundColor: "#f1f1f1" },
//                                     display: "flex",
//                                     justifyContent: "space-between",
//                                     alignItems: "center",
//                                 }}
//                                 secondaryAction={
//                                     <Box>
//                                         <IconButton
//                                             onClick={() => editNote(index)}
//                                             sx={{ color: "#007BFF" ,width:"100px"}}
//                                             aria-label={`edit note ${index + 1}`}
//                                         >
//                                             <EditIcon />
//                                         </IconButton>
//                                         <IconButton
//                                             onClick={() => deleteNote(index)}
//                                             sx={{ width:"100px",color: "#FF5A5A" }}
//                                             aria-label={`delete note ${index + 1}`}
//                                         >
//                                             <DeleteIcon />
//                                         </IconButton>
//                                     </Box>
//                                 }
//                             >
//                                 <Typography
//                                     sx={{ color: "#333333", whiteSpace: "pre-wrap" }} // Preserve newlines
//                                 >
//                                     {note.content}
//                                 </Typography>
//                             </ListItem>
//                         ))
//                     ) : (
//                         <Typography sx={{ color: "#333333", marginTop: "10px", padding: "10px" }}>
//                             No notes yet. Add some!
//                         </Typography>
//                     )}
//                 </List>
//             </Box>
//         </Box>
//     );
// }

// export default NotesPage;
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    List,
    ListItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Sidebar from "./Sidebar";

function NotesPage() {
    const [userId, setUserId] = useState(null);
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(storedUserId);
            fetchNotes(storedUserId); 
        } else {
            console.error("User not logged in");
        }
    }, []);

    const fetchNotes = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/notes/user/${userId}`);
            setNotes(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    const handleNoteChange = useCallback((event) => {
        setCurrentNote(event.target.value);
    }, []);

    const saveNote = useCallback(() => {
        const trimmedNote = currentNote.trim();
        if (trimmedNote === "") return;

        const noteData = { content: trimmedNote, userId };

        if (editIndex !== null) {
            const noteToUpdate = notes[editIndex];
            axios.put(`http://localhost:8080/api/notes/${noteToUpdate.id}`, noteData)
                .then(response => {
                    if (response.data) {
                        setNotes(prevNotes => {
                            const updatedNotes = [...prevNotes];
                            updatedNotes[editIndex] = response.data;
                            return updatedNotes;
                        });
                        setEditIndex(null);
                        setCurrentNote("");
                    }
                })
                .catch(error => console.error("Error updating note:", error));
        } else {
            axios.post(`http://localhost:8080/api/notes/${userId}`, noteData)
                .then(response => {
                    setNotes(prevNotes => [...prevNotes, response.data]);
                    setCurrentNote("");
                })
                .catch(error => console.error("Error saving note:", error));
        }
    }, [currentNote, editIndex, notes, userId]);

    const deleteNote = useCallback((index) => {
        const noteToDelete = notes[index];
        axios.delete(`http://localhost:8080/api/notes/${noteToDelete.id}`)
            .then(() => {
                setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
                if (editIndex === index) {
                    setEditIndex(null);
                    setCurrentNote("");
                }
            })
            .catch(error => console.error("Error deleting note:", error));
    }, [editIndex, notes]);

    const editNote = useCallback((index) => {
        setCurrentNote(notes[index].content);
        setEditIndex(index);
    }, [notes]);

    return (
        <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#F0F0F0", color: "#333" }}>
            <Sidebar />
            <Box sx={{ flexGrow: 1, padding: "40px", backgroundColor: "#f5f5f5", color: "#333333" }}>
                <Typography variant="h4" gutterBottom>
                    Your Notes
                </Typography>

                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                    value={currentNote}
                    onChange={handleNoteChange}
                    placeholder="Type your notes here..."
                    sx={{
                        backgroundColor: "#ffffff",
                        color: "#333333",
                        borderRadius: "8px",
                        marginBottom: "20px",
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "#cccccc",
                            },
                            "&:hover fieldset": {
                                borderColor: "#999999",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "#666666",
                            },
                        },
                        "& input::placeholder": {
                            color: "#999999",
                            opacity: 1,
                        },
                        "& textarea::placeholder": {
                            color: "#999999",
                            opacity: 1,
                        },
                        "& .MuiInputBase-input": {
                            color: "#333333",
                        },
                    }}
                />

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#007BFF",
                        color: "#FFFFFF",
                        borderRadius: "8px",
                        width: "200px",
                        padding: "10px 20px",
                        "&:hover": {
                            backgroundColor: "#0056b3",
                        },
                    }}
                    onClick={saveNote}
                    disabled={currentNote.trim() === ""}
                >
                    {editIndex !== null ? "Update Note" : "Save Note"}
                </Button>

                <Typography variant="h5" gutterBottom sx={{ marginTop: "30px" }}>
                    Saved Notes
                </Typography>
                <List
                    sx={{
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        maxHeight: "60vh",
                        overflowY: "auto",
                        padding: 0,
                    }}
                >
                    {notes.length > 0 ? (
                        notes.map((note, index) => (
                            <ListItem
                                key={index}
                                sx={{
                                    backgroundColor: "#f9f9f9",
                                    borderBottom: "1px solid #eeeeee",
                                    "&:hover": { backgroundColor: "#f1f1f1" },
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                                secondaryAction={
                                    <Box>
                                        <IconButton
                                            onClick={() => editNote(index)}
                                            sx={{ color: "#007BFF", width: "100px" }}
                                            aria-label={`edit note ${index + 1}`}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => deleteNote(index)}
                                            sx={{ width: "100px", color: "#FF5A5A" }}
                                            aria-label={`delete note ${index + 1}`}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                }
                            >
                                <Typography sx={{ color: "#333333", whiteSpace: "pre-wrap" }}>
                                    {note.content}
                                </Typography>
                            </ListItem>
                        ))
                    ) : (
                        <Typography sx={{ color: "#333333", marginTop: "10px", padding: "10px" }}>
                            No notes yet. Add some!
                        </Typography>
                    )}
                </List>
            </Box>
        </Box>
    );
}

export default NotesPage;