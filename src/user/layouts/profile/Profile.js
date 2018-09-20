import React, { Component } from "react";
import AttestButton from "./../../ui/AttestButton";

class Profile extends Component {
  constructor(props, { authData }) {
    super(props);
    authData = this.props;
  }

  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Profile</h1>
            <p>Change these details in UPort to see them reflected here.</p>
            <div>
              <strong>Name</strong>
              <br />
              <p> {this.props.authData.name}</p>
              <p>{this.props.authData.specificNetworkAddress}</p>
              <p> {this.props.authData.country}</p>

              <p>{this.props.authData.phone}</p>
              <img src={this.props.authData.avatar.uri} alt="user pic" />
            </div>
            <button>
              <AttestButton />
            </button>
          </div>
        </div>
      </main>
    );
  }
}

export default Profile;
