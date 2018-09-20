import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props);
    authData = this.props;
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <h3>
              <strong>Congratulations {this.props.authData.name}!</strong>{" "}
            </h3>
            <p>
              If you're seeing this page, you've logged in with UPort
              successfully.
            </p>
            <h3>Eth Address: {this.props.authData.decodedID.address}</h3>
            <h3>Country: {this.props.authData.country}</h3>
            <h3> Phone Number: {this.props.authData.phone}</h3>
            <img src={this.props.authData.avatar.uri} alt="user pic" />
          </div>
        </div>
      </main>
    );
  }
}

export default Dashboard;
