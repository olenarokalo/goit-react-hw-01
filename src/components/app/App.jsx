import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransationHistory/TransationHistory";

import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}
