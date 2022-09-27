import React from "react";

const UsersList = ({ users, selectedUser, deleteUser }) => {
  console.log(users);

  return (
    <div className="back-list">
      <div className="list-container">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-container">
              <h3>
                {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
              <p>{user.birthday}</p>
            </div>
            <div className="buttons-container">
              <i
                className="fa-solid fa-solid fa-pen"
                onClick={() => selectedUser(user)}
              ></i>

              <i
                className="fa-solid fa-trash"
                onClick={() => deleteUser(user.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
