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

function AdminSidebar() {
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
                boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                <img src={logo} alt="JotDown Logo" style={{ width: "120px", height: "auto" }} />
            </Box>
            <List>
                <Typography variant="caption" style={{ marginTop: "10px", color: "#333", marginLeft: "5px" }}>
                    Management
                </Typography>
                <ListItem button onClick={() => navigate('/admin/feedback')}>
                    <ListItemText primary="Feedback" />
                </ListItem>
                <ListItem button onClick={() => navigate('/admin/usermanagement')}>
                    <ListItemText primary="Users" />
                </ListItem>
                <Divider style={{ marginTop: "10px", marginBottom: "10px", backgroundColor: "#DDD" }} />
                <ListItem button onClick={() => navigate('#settings')}>
                    <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button onClick={() => navigate('#help')}>
                    <ListItemText primary="Help" />
                </ListItem>
                <ListItem button onClick={() => navigate('#feedback')}>
                    <ListItemText primary="Support" />
                </ListItem>
                {/* <ListItem button onClick={() => navigate('/adminprofile')}>
                    <ListItemText primary="Profile" />
                </ListItem> */}
                <ListItem button onClick={() => navigate('/')}>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );
}

export default AdminSidebar;
