import { useSelector } from "react-redux";

const UserData = () => {
  const users = useSelector(state => state.getUserDataReducer.users);
  const searchedData = useSelector(state => state.getUserDataReducer.searchedData);
  const userData = searchedData ? searchedData:users;
  return (
    <>
    {userData.length ?<div>Users : {userData.map((user=> (
      <div className="my-website-userdata">{user.name}</div>
    )))}</div> : "No data found"}
    </>
  )
}

export default UserData;