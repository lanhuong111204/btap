import React from "react";

class MyComponent extends React.Component {
  state = {
    invest: '',
    rate: '',
    goal: '',
    showTable: false,
  };

  handleonchangeInvest = (event) => {
    this.setState({
      invest: event.target.value,
    });
  };

  handleonchangeRate = (event) => {
    this.setState({
      rate: event.target.value,
    });
  };

  handleonchangeGoal = (event) => {
    this.setState({
      goal: event.target.value,
    });
  };

  handleonchangeClick = () => {
    this.setState({
      showTable: true,
    });
  };

  renderTable = () => {
    const tableRows = [];
    const { invest, rate, goal } = this.state;
    let years = new Date().getFullYear();
    let money = parseFloat(invest);
    let endMoney = money;
    let i = 1;
    while (endMoney < goal) {
        
        tableRows.push(
            <tr key={i}>
              <td>{years}</td>
              <td>{endMoney}</td>
              <td>{rate}%</td>
              <td>{endMoney}</td>
            </tr>
          );
      i++;
      endMoney += endMoney * (parseFloat(rate) / 100);
      years++;
    }

    return (
      <table border="1">
        <thead>
          <tr>
            <th>Year</th>
            <th>Money</th>
            <th>Rate</th>
            <th>End Year</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    );
  };

  render() {
    return (
      <>
        <p>
          <label htmlFor="">Input Your Invest Money</label>
          <input
            onChange={(event) => this.handleonchangeInvest(event)}
            type="text"
          />
        </p>
        <br />
        <p>
          <label htmlFor="">Input Rate</label>
          <input
            onChange={(event) => this.handleonchangeRate(event)}
            type="text"
          />
        </p>
        <br />
        <p>
          <label htmlFor="">Input Your Goal</label>
          <input
            onChange={(event) => this.handleonchangeGoal(event)}
            type="text"
          />
        </p>
        <br />
        <h4>
          <button onClick={this.handleonchangeClick}>Click</button>
        </h4>
        {this.state.showTable && this.renderTable()}
      </>
    );
  }
}

export default MyComponent;