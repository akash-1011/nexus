import React from "react";
import ReactGlobe from "react-globe";
import "./App.css";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 22,
    fontFamily: 'Rubik',
  },
  body: {
    fontSize: 18,
    fontFamily: 'Rubik',
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      fontFamily: 'Rubik',
      backgroundColor: theme.palette.action.hover,
    },
    fontFamily: 'Rubik',
  },
}))(TableRow);


function App() {

  const markers = [
    {
      id: 'marker1',
      city: 'India',
      color: 'red',
      coordinates: [20.5937, 78.9629],
      value: 31470893,
    },
    {
      id: 'marker2',
      city: 'USA',
      color: 'red',
      coordinates: [37.0902, 95.7129],
      value: 35288544,
    },
    {
      id: 'marker3',
      city: 'Brazil',
      color: 'red',
      coordinates: [20.2350, 40.9629],
      value: 19707662,
    },
    {
      id: 'marker4',
      city: 'Russia',
      color: 'red',
      coordinates: [61.5240, 105.3188],
      value: 6172812,
    },
    {
      id: 'marker5',
      city: 'UK',
      color: 'red',
      coordinates: [55.3781, 3.4360],
      value: 5745526,
    }
  ];

  const options = {
    cameraRotateSpeed: 0.5,
    markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
  };

  return (
    <div className="App">
      <div className="cover">
        <div className="left">
          <h1>COVID-19</h1>
        </div>
        <div className="right">
          <h2>Top 5 countries</h2>
          <TableContainer>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell>Countries</StyledTableCell>
            <StyledTableCell align="right">Cases</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow className="text">
              <StyledTableCell component="th" scope="row">USA</StyledTableCell>
              <StyledTableCell align="right">35,288,544</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">India</StyledTableCell>
              <StyledTableCell align="right">31,470,893</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Brazil</StyledTableCell>
              <StyledTableCell align="right">19,707,662</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">Russia</StyledTableCell>
              <StyledTableCell align="right">6,172,812</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">UK</StyledTableCell>
              <StyledTableCell align="right">5,745,526</StyledTableCell>
            </StyledTableRow>          
        </TableBody>
      </Table>
    </TableContainer>
        </div>
      </div>
      <div className="globe">
        <ReactGlobe
          height="100vh"
          width="100vw"
          initialCoordinates={[1.3521, 103.8198]}
          markers={markers}
          options={options}
          onClickMarker={(marker) => console.log(marker)}
        />
      </div>
    </div>
  );
}


export default App;
