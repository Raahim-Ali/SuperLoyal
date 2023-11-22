import React, { useState } from "react";
import ResponsiveAppBar from "../AppBar/Navbar";
import TopBg from "../TopBg/TopBg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Button from "@mui/material/Button";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import superloyal1 from "../Assets/superloyal1.svg";
import superloyal2 from "../Assets/superloyal2.svg";
import superloyal3 from "../Assets/superloyal3.svg";
import superloyal4 from "../Assets/superloyal4.svg";
import superloyal5 from "../Assets/superloyal5.svg";
import LineAreaChart from "./LineAreaChart";
import rewards1 from "../Assets/rewards1.svg";
import rewards2 from "../Assets/rewards2.svg";
import rewards3 from "../Assets/rewards3.svg";
import { Link } from "react-router-dom";

function createData(user, order, value, date, balance, loyalty) {
  return { user, order, value, date, balance, loyalty };
}

const loyaltyColor = (loyaltyLevel) => {
  let color;
  if (loyaltyLevel === "Gold") {
    color = "#FFD700";
  } else if (loyaltyLevel === "Silver") {
    color = "#C0C0C0";
  } else if (loyaltyLevel === "Bronze") {
    color = "#CD7F32";
  }
  return { color };
};

const rows = [
  createData(
    "William Cork",
    "ALPINE",
    "142 points",
    "Just now",
    "851 points",
    "Bronze"
  ),
  createData(
    "Alice de Luca",
    "FRONTIER JACKET",
    "142 points",
    "Today",
    "4,510 points",
    "Bronze"
  ),
  createData(
    "Jasyn Cook",
    "DOWNHILL '27 JACKET",
    "1,100 points",
    "Yesterday",
    "1,100 points",
    "Bronze"
  ),
  createData(
    "Angela Park",
    "ALPINE SPORTS CLUB BLAZER",
    "142 points",
    "2 days ago",
    "8,241 points",
    "Gold"
  ),
  createData(
    "Mark Donaghy",
    "ALPINE SPORTS CLUB TROUSER",
    "250 points",
    "2 days ago",
    "1,491 points",
    "Bronze"
  ),
  createData(
    "Johanna Avery",
    "ALPINE RUCKSACK",
    "395 points",
    "3 days ago",
    "5,891 points",
    "Silver"
  ),
  createData(
    "Peter Lewis",
    "HIGH WEST JACKET",
    "1,195 points",
    "3 days ago",
    "1,195 points",
    "Bronze"
  ),
  createData(
    "Mariana Mazzucato",
    "SKI RACE KNIT",
    "500 points",
    "3 days ago",
    "895 points",
    "Bronze"
  ),
];

export const handleSearchChange = (event, setName) => {
  setName(event.target.value);
};
export function User() {
  const [name, setName] = useState("");

  const filteredRows = rows.filter((row) => {
    return row.user.toLowerCase().includes(name.toLowerCase());
  });
  return (
    <>
      <ResponsiveAppBar />
      <TopBg />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          sx={{
            width: "45%",
            height: "330px",
            bottom: "110px",
            left: "50px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Box
              sx={{
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Your rewards
              </Typography>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <img src={rewards1} alt=""></img>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <Typography>Created 3 months ago</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Custom Jersey from Futsol
                    </Typography>
                  </Box>
                  <Box sx={{ marginLeft: "150px", marginTop: "15px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      2 Redemptions
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        borderRadius: "30px",
                        marginLeft: "140px",
                        marginTop: "8px",
                        textTransform: "none",
                      }}
                      variant="contained"
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <img src={rewards2} alt=""></img>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <Typography>Created last month</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Membership Futsol Club
                    </Typography>
                  </Box>
                  <Box sx={{ marginLeft: "160px", marginTop: "15px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      15 Redemptions
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        borderRadius: "30px",
                        marginLeft: "140px",
                        marginTop: "8px",
                        textTransform: "none",
                      }}
                      variant="contained"
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <img src={rewards3} alt=""></img>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "15px",
                      marginTop: "10px",
                    }}
                  >
                    <Typography>Created yesterday</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                      Maracana VIP Access
                    </Typography>
                  </Box>
                  <Box sx={{ marginLeft: "190px", marginTop: "15px" }}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      0 Redemptions
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        borderRadius: "30px",
                        marginLeft: "140px",
                        marginTop: "8px",
                        textTransform: "none",
                      }}
                      variant="contained"
                    >
                      Details
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <Link to="/rewards">
                    <Button
                      sx={{
                        color: "silver",
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      See more
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "45%",
            height: "330px",
            bottom: "110px",
            right: "30px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Box
              sx={{
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginBottom: "8px",
                }}
              >
                Your points in the table
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LineAreaChart />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <Card
          sx={{
            width: "1700px",
            height: "170px",
            bottom: "110px",
            left: "50px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "15px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    marginBottom: "8px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                >
                  Top Superloyal Users
                </Typography>
                <Link to="/users">
                  <Button sx={{ textTransform: "none" }}>See all</Button>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img src={superloyal1} alt=""></img>
                <img src={superloyal2} alt=""></img>
                <img src={superloyal3} alt=""></img>
                <img src={superloyal4} alt=""></img>
                <img src={superloyal5} alt=""></img>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <Card
          sx={{
            width: "1700px",
            height: "600px",
            bottom: "110px",
            left: "50px",
            borderRadius: "12px",
            padding: "12px",
            position: "relative",
            backgroundColor: "white",
          }}
        >
          <CardContent>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}
              >
                <Typography sx={{ fontSize: "25px", fontWeight: "bold" }}>
                  Recent Transactions
                </Typography>
                <div>
                  <TextField
                    variant="outlined"
                    placeholder="Search transaction history"
                    size="small"
                    onChange={(event) => handleSearchChange(event, setName)}
                    value={name}
                    InputProps={{
                      startAdornment: (
                        <SearchIcon
                          sx={{ marginRight: "5px", color: "#64748B" }}
                        />
                      ),
                      sx: {
                        background: "#EFF6FF",
                        borderRadius: "20px",
                        width: "400px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgba(100, 116, 139, 0)",
                        },
                      },
                    }}
                  />
                </div>
              </Box>
              <TableContainer sx={{ boxShadow: "none" }} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ background: "#EFF6FF" }}>
                    <TableRow>
                      <TableCell sx={{ color: "#64748B" }}>User</TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "#64748B", textAlign: "left" }}
                      >
                        Order
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "#64748B", textAlign: "left" }}
                      >
                        Value
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "#64748B", textAlign: "left" }}
                      >
                        Date
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "#64748B", textAlign: "left" }}
                      >
                        Total balance
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ color: "#64748B", textAlign: "left" }}
                      >
                        Loyalty level
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredRows.map((row) => (
                      <TableRow
                        className="table-row"
                        key={row.user}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.user}
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          {row.order}
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          {row.value}
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="left">
                          {row.date}
                        </TableCell>
                        <TableCell align="left" sx={{ fontWeight: "bold" }}>
                          {row.balance}
                        </TableCell>
                        <TableCell align="left" sx={loyaltyColor(row.loyalty)}>
                          {row.loyalty}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default User;
