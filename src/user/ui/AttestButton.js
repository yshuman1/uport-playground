import React, { Component } from "react";
import { uport } from "./../../util/connectors";

class AttestButton extends Component {
  attest() {
    uport
      .requestCredentials()
      .then(credentials => {
        var d = new Date();
        var month = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec"
        ];
        uport.attestCredentials({
          sub: credentials.address,
          claim: {
            name: "yasin shuman",
            PulseID: "1234"
          }
        });
      })
      .then(Credentials => {
        console.log(Credentials, "\n attestation fired correctly");
      });
  }

  render() {
    return (
      <a href="#" className="pure-menu-link" onClick={this.attest()}>
        Attest
      </a>
    );
  }
}
export default AttestButton;
