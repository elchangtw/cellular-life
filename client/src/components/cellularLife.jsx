import React from 'react';
import styles from "./cellularLife.css";

import Grid from "./grid.jsx";
import Form from "./form.jsx";

import { gridFunctions } from "./gridFunctions.jsx";
import { gridDatas } from "./gridDatas.jsx";

class CellularLife extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: 4,
      gridData: [],
      selectedBase: 0
    }
    this.resetGrid = this.resetGrid.bind(this);
    this.iterateGrid = this.iterateGrid.bind(this);
    this.switchGrid = this.switchGrid.bind(this);
  }

  resetGrid() {
    this.setState({
      gridData: gridDatas[this.state.selectedBase]
    });

    // var data = new Array(5).fill().map(() => { return new Array(5).fill(0); });
    // var data = [...new Array(5)].map(() => { return new Array(5).fill(0); });

    // for (var i = 0; i < this.state.gridSize; i++) {
    //   var rowData = [];
    //   for (var j = 0; j < this.state.gridSize; j++) {
    //     rowData.push(0);
    //   }
    //   data.push(rowData);
    // }

    // data[1][1] = 1;
    // data[1][2] = 1;
    // data[1][3] = 1;
    // data[2][0] = 1;
    // data[2][1] = 1;
    // data[2][2] = 1;

    // data[0][0] = 1;
    // data[0][1] = 1;
    // data[1][0] = 1;
    // data[2][3] = 1;
    // data[3][2] = 1;
    // data[3][3] = 1;

    // data[0][1] = 1;
    // data[1][1] = 1;
    // data[2][1] = 1;

    // this.setState({
    //   gridData: data
    // });
  }

  componentDidMount() {
    this.resetGrid();
  }

  iterateGrid() {
    var data = gridFunctions.iterateGrid(this.state.gridSize, this.state.gridData);
    this.setState({
      gridData: data
    });
  }

  switchGrid(e) {
    this.setState({
      selectedBase: e.target.value,
      gridData: gridDatas[e.target.value]
    });
  }

  render() {
    return (
      <div className={styles.global}>
        <h1 className={styles.header}>Life</h1>
        <Grid gridSize={this.state.gridSize} gridData={this.state.gridData} />
        <Form resetGrid={this.resetGrid} iterateGrid={this.iterateGrid} switchGrid={this.switchGrid} />
      </div>
    );
  }
}

export default CellularLife;