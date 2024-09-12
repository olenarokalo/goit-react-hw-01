import userData from "../../userData.json";
import Profile from "../Profile/Profile";

// import friends from "../../friends.json";
// import FriendListItem from "./FriendList/FriendList";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      {/* <FriendListItem friends={friends} /> */}
    </>
  );
}
