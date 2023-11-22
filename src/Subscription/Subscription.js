import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import qmark from "../Assets/qmark.svg";
import date from "../Assets/date.svg";
import points from "../Assets/points.svg";
import tlogo from "../Assets/tlogo.svg";
import status from "../Assets/status.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Subscription() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Card
          sx={{
            width: "80%",
            height: "50px",
            top: "100px",
            borderRadius: "15px",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "35%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      marginRight: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    DATE
                  </Typography>
                  <img src={date} alt="/" />
                </Box>
                <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                  BRAND
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                  DETAILS
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "35%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <img src={points} alt="/" />
                  <Typography
                    sx={{
                      fontSize: 14,
                      marginLeft: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    POINTS
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: 14, fontWeight: "bold" }}>
                  STATUS
                </Typography>
                <img src={qmark} alt="/" />
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "80%",
            height: "300px",
            top: "100px",
            marginTop: "5px",
            borderRadius: "15px",
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ marginTop: "15px" }}>
                <Typography>Today</Typography>
              </Box>
              <Box sx={{ marginLeft: "190px" }}>
                <img src={tlogo} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "163px" }}>
                <Typography>23 Jersey - XL - Blazer Red,</Typography>
                <Typography>Limited Edition</Typography>
              </Box>
              <Box sx={{ marginLeft: "350px", fontWeight: "bold" }}>
                <Typography>-</Typography>
              </Box>
              <Box sx={{ marginLeft: "185px" }}>
                <img src={status} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "150px" }}>
                <ExpandMoreIcon />
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ marginLeft: "233px" }}>
                <img src={tlogo} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "163px" }}>
                <Typography>23 Jersey - XL - Blazer Red,</Typography>
                <Typography>Limited Edition</Typography>
              </Box>
              <Box sx={{ marginLeft: "350px", fontWeight: "bold" }}>
                <Typography>-</Typography>
              </Box>
              <Box sx={{ marginLeft: "185px" }}>
                <img src={status} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "150px" }}>
                <ExpandMoreIcon />
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ marginLeft: "233px" }}>
                <img src={tlogo} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "163px" }}>
                <Typography>23 Jersey - XL - Blazer Red,</Typography>
                <Typography>Limited Edition</Typography>
              </Box>
              <Box sx={{ marginLeft: "350px", fontWeight: "bold" }}>
                <Typography>-</Typography>
              </Box>
              <Box sx={{ marginLeft: "185px" }}>
                <img src={status} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "150px" }}>
                <ExpandMoreIcon />
              </Box>
            </Box>
            <Box sx={{ display: "flex", marginTop: "5px" }}>
              <Box sx={{ marginLeft: "233px" }}>
                <img src={tlogo} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "163px" }}>
                <Typography>23 Jersey - XL - Blazer Red,</Typography>
                <Typography>Limited Edition</Typography>
              </Box>
              <Box sx={{ marginLeft: "350px", fontWeight: "bold" }}>
                <Typography>-</Typography>
              </Box>
              <Box sx={{ marginLeft: "185px" }}>
                <img src={status} alt="/" />
              </Box>
              <Box sx={{ marginLeft: "150px" }}>
                <ExpandMoreIcon />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default Subscription;
