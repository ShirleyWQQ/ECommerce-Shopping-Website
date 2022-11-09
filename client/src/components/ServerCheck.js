import React from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button"

export default class ServerCheck extends React.Component {
  constructor(props) {
    super(props);
    this.state = { serverStatus: "Unknown" };
  }
  getServerStatus = () => {
    Axios.get("http://localhost:3001/status")
      .then(res => {
        this.setState((state, props) => ({
          serverStatus: res.data
        }));
      })
      .catch(err => {
        this.setState({ serverStatus: "Server is not running" });
      });
  }

  render() {
    return (
      <div style={{ padding: 10, backgroundColor: "LightGreen" }}>
        <Button onClick={this.getServerStatus}>Check Server</Button><br />
        <i><b>{this.state.serverStatus}</b></i><br />
      </div>
    );
  }
}
