import React from "react";
import Navbar from "../AppBar/Navbar";
import TopBg from "../TopBg/TopBg";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import active1 from "../Assets/active1.svg";
import active2 from "../Assets/active2.svg";
import active3 from "../Assets/active3.svg";
import { Link } from "react-router-dom";

import { Typography } from "@mui/material";

function Reward() {
  return (
    <div>
      <Navbar />
      <TopBg />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "80%",
            height: "730px",
            bottom: "110px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                Active Rewards{" "}
              </Typography>
              <Link to="/newreward" className="nav-item">
                <Button
                  sx={{ borderRadius: "30px", textTransform: "none" }}
                  variant="contained"
                >
                  Create New
                </Button>
              </Link>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "20px",
              }}
            >
              <Card
                sx={{
                  width: "30%",
                  background: "rgba(214, 214, 214, 1)",
                  height: "610px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    <img src={active1} alt=""></img>
                  </Box>
                  <Box sx={{ marginTop: "20px" }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                      Day of Heli Skiing
                    </Typography>
                    <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
                      10,000 Points
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "55px",
                      }}
                    >
                      Number of times redeemed: 49{" "}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "18px",
                      }}
                    >
                      <Button
                        sx={{
                          height: "38px",
                          background: "rgba(100, 116, 139, 1)",
                          borderRadius: "30px",
                          color: "white",
                          fontSize: "10px",
                          textTransform: "none",
                        }}
                      >
                        Check Details
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: "30%",
                  background: "rgba(214, 214, 214, 1)",
                  height: "610px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    <img src={active2} alt=""></img>
                  </Box>
                  <Box sx={{ marginTop: "20px" }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                      Day of Snowcat Skiing
                    </Typography>
                    <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
                      5,000 Points
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "55px",
                      }}
                    >
                      Number of times redeemed: 65
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "18px",
                      }}
                    >
                      <Button
                        sx={{
                          height: "38px",
                          background: "rgba(100, 116, 139, 1)",
                          borderRadius: "30px",
                          color: "white",
                          fontSize: "10px",
                          textTransform: "none",
                        }}
                      >
                        Check Details
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              <Card
                sx={{
                  width: "30%",
                  background: "rgba(214, 214, 214, 1)",
                  height: "610px",
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "15px",
                    }}
                  >
                    <img src={active3} alt=""></img>
                  </Box>
                  <Box sx={{ marginTop: "20px" }}>
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                      Two-day Ski Pass
                    </Typography>
                    <Typography sx={{ fontSize: "15px", marginTop: "10px" }}>
                      2,000 Points
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "55px",
                      }}
                    >
                      Number of times redeemed: 417
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "18px",
                      }}
                    >
                      <Button
                        sx={{
                          height: "38px",
                          background: "rgba(100, 116, 139, 1)",
                          borderRadius: "30px",
                          color: "white",
                          fontSize: "10px",
                          textTransform: "none",
                        }}
                      >
                        Check Details
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default Reward;
