import { uport } from "./../../../util/connectors.js";
import { browserHistory } from "react-router";
import { decode as mnidDecode } from "mnid";

export const USER_LOGGED_IN = "USER_LOGGED_IN";
function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: user
  };
}

export function loginUser() {
  return function(dispatch) {
    // UPort and its web3 instance are defined in ./../../../util/wrappers.
    // Request uPort persona of account passed via QR
    uport
      .requestCredentials({
        requested: ["name", "avatar", "phone", "country"],
        notifications: true // We want this if we want to recieve credentials
      })
      .then(credentials => {
        credentials.decodedID = mnidDecode(credentials.address);
        dispatch(userLoggedIn(credentials));
        credentials.specificNetworkAddress = credentials.decodedID.address;
        console.log(credentials);
        // Used a manual redirect here as opposed to a wrapper.
        // This way, once logged in a user can still access the home page.
        var currentLocation = browserHistory.getCurrentLocation();

        if ("redirect" in currentLocation.query) {
          return browserHistory.push(
            decodeURIComponent(currentLocation.query.redirect)
          );
        }

        return browserHistory.push("/dashboard");
      });
  };
}
