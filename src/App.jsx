import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUsers(res.data));
  };

  const addUser = (newUser) => {
    axios
    .post(`https://users-crud1.herokuapp.com/users/`, newUser)
    .then(() => getUsers())
    .catch(err => console.log(err.response))
  }

  const updateUser = (newUser) => {
    axios
    .put(`https://users-crud1.herokuapp.com/users/${newUser.id}/`, newUser)
    .then(() => getUsers())
    .catch(err => console.log(err.response))
  }


  const selectUser = (user) => {
    setUserSelected(user);
  };
  
  const deleteUser = (id) => {
    axios
    .delete(`https://users-crud1.herokuapp.com/users/${id}`)
    .then(() => getUsers())
  }

  console.log(users)

  const deselectUser = () => setUserSelected(null);

  return (
    <div className="App">
      <UsersForm
        addUser={addUser}
        userSelected={userSelected}
        deselectUser={deselectUser}
        updateUser={updateUser}
      />
      <UsersList
        users={users}
        deleteUser={deleteUser}
        selectedUser={selectUser}
      />
    </div>
  );
}

export default App;
