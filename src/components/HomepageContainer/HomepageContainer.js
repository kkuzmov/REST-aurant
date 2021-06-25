import { useContext } from "react";
import { AuthContext } from "../Auth/Auth";
import { firebaseApp } from "../../firebase/firebase.config";
import HomepageUser from "../HomepageUser/HomepageUser";
import HomepageGuest from "../HomepageGuest/HomepageGuest";

function HomepageContainer() {
  const { currentUser } = useContext(AuthContext);
  let userInfo = firebaseApp.auth().currentUser;
  if (currentUser) {
    return <HomepageUser username={userInfo.displayName} />;
  } else {
    return <HomepageGuest />;
  }
}
export default HomepageContainer;
