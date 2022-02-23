import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUserHandler = (user) => {
    console.log(user);
    setUsers((prevUsers)=> {
      return [users,...prevUsers]
    });
  };

  return (
    <div>
      <AddUser onAddNewUser={addNewUserHandler}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
