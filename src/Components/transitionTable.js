import { React, useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Moment from "react-moment";

function TransitionTable() {
  const [results, setResults] = useState([]);
  const formatNumber = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const fetchData = () => {
    fetch("https://basic-banking-api.herokuapp.com/api/transitions")
      .then((res) => res.json())
      .then((results) => {
        setResults(results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Email ID</TableCell>
            <TableCell align="center">Amount Transfered</TableCell>
            <TableCell align="center">Date and Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.phone_number}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                {formatNumber(row.transfer_balance)}
              </TableCell>
              <TableCell align="center">
                <Moment>{row.date}</Moment>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TransitionTable;
