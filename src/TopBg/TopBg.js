import { Box, Typography } from "@mui/material";
import React from "react";
import lifetime from "../Assets/lifetime.svg";
import redeemedpoints from "../Assets/redeemedpoints.svg";
import userpoints from "../Assets/userpoint.svg";

function TopBg() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "250px",
          top: "64px",
          backgroundColor: "#0F172A",
          justifyContent: "start",
          paddingTop: "40px",
        }}
      >
        {(window.location.pathname === "/" ||
          window.location.pathname === "/users") && (
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 700,
              fontSize: 32,
              color: "white",
            }}
          >
            FUTSOL
          </Typography>
        )}
        {window.location.pathname === "/rewards" && (
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 700,
              fontSize: 32,
              color: "white",
            }}
          >
            FUTSOL REWARDS
          </Typography>
        )}
        {window.location.pathname === "/newreward" && (
          <Typography
            sx={{
              fontFamily: "Readex Pro",
              fontWeight: 700,
              fontSize: 32,
              color: "white",
            }}
          >
            Create new Reward
          </Typography>
        )}
        {window.location.pathname === "/" && (
          <div>
            <Box sx={{ display: "flex" }}>
              <Typography>
                <img src={lifetime} alt="/"></img>
              </Typography>
              <Typography>
                <img src={redeemedpoints} alt="/"></img>
              </Typography>
              <Typography>
                <img src={userpoints} alt="/"></img>
              </Typography>
            </Box>
          </div>
        )}
      </Box>
    </>
  );
}

export default TopBg;
