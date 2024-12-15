import React from "react";
import {
    List,
    ListItem,
    ListItemText,
    Box,
    Typography,
    Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.jpg';

function Sidebar() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "250px",
                backgroundColor: "#FFFFFF",
                padding: "20px",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                boxShadow: "2px 0 5px rgba(0,0,0,0.1)", // Shadow for depth
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <img src={logo} alt="JotDown Logo" style={{ width: "120px", height: "auto" }} />
                <EditIcon
                    sx={{ marginLeft: "auto", cursor: "pointer", color: "black" }}
                    onClick={() => navigate('/notes')}
                />
            </Box>
            <List>
                {/* <ListItem button onClick={() => navigate('/notes')}>
                    <ListItemText primary="Jotdown AI" />
                </ListItem> */}
                <Typography variant="caption" style={{ marginTop: "10px", color: "#333", marginLeft: "5px" }}>
                    Private
                </Typography>
                <ListItem button onClick={() => navigate('/recipe')}>
                    <ListItemText primary="Recipe Book" />
                </ListItem>
                <ListItem button onClick={() => navigate('/meal')}>
                    <ListItemText primary="Meal Planner" />
                </ListItem>
                <ListItem button onClick={() => navigate('/monthly-budget')}>
                    <ListItemText primary="Monthly Budget" />
                </ListItem>
                <ListItem button onClick={() => navigate('/todolist')}>
                    <ListItemText primary="To-do List" />
                </ListItem>

                <Divider style={{ marginTop: "10px", marginBottom: "10px", backgroundColor: "#DDD" }} />

                <ListItem button onClick={() => navigate('/')}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button onClick={() => navigate('/calendar')}>
                    <ListItemText primary="Calendar" />
                </ListItem>
                <ListItem button onClick={() => navigate('/faq')}>
                    <ListItemText primary="FAQ" />
                </ListItem>
                <ListItem button onClick={() => navigate('/feedback')}>
                    <ListItemText primary="Support" />
                </ListItem>
                <ListItem button onClick={() => navigate('/profile')}>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );
}

export default Sidebar;
