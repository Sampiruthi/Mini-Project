import React, { useEffect, useState } from "react";
import {
    Box,
    Typography
} from "@mui/material";
import Sidebar from "./Sidebar";

function Firstpage() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <Box sx={{ display: "flex", height: "100vh", backgroundColor: "#F0F0F0", color: "#333" }}>
            <Sidebar/>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography
                    variant="h1"
                    className={animate ? "giggle bounce" : ""}
                    sx={{ transition: "transform 0.3s ease", textAlign: 'center', color: "#333" }} // Text color adjusted
                >
                    Getting Started
                </Typography>
            </Box>
            <style>{`
        .giggle {
          animation: giggle 0.5s infinite alternate;
        }

        .bounce {
          animation: bounce 0.8s infinite alternate;
        }

        @keyframes giggle {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(2deg);
          }
          50% {
            transform: rotate(-2deg);
          }
          75% {
            transform: rotate(2deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes bounce {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
        </Box>
    );
}

export default Firstpage;
