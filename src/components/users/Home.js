import React, { useState } from 'react';
import UserList from '../users/UserList'
import AddUser from '../users/AddUser'
import EditUser from '../users/EditUser'
// import axios from 'axios'

function Home() {


  const usersData = [
    {id:1, name: "Meann", userName: "mfrancisco26"},
    {id:2, name: "Jay", userName: "jgornez14"},
    {id:3, name: "Jesse", userName: "jching12"},
    {id:4, name: "Micah", userName: "mdelacruz7"},
    {id:5, name: "Ayako", userName: "aandaya24"},
  ]

  const currentUsersData = {id: null, name: "", userName: ""}

  const [users, setUsers] = useState([])

  const [edit, setEdit] = useState(false)
  const [currentUser, setCurrentUser] = useState(currentUsersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
    console.log(users)
  }

  const deleteUser = (id) => {
    alert("Are you sure you want to delete?")
    setUsers(users.filter( user => user.id !== id))
    console.log(users)
  }

  const editRow = (user) => {
    setEdit(true)
    setCurrentUser({ id: user.id, name: user.name, userName: user.userName })
  }

  const updateUser = (id, updatedUser) => {
    setEdit(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  return (
    <div className="container">
      <h1>Client Information</h1>
      <div className="flex-row">
        <div className="flex-large">
          { edit ? (
            <div>
              <h4>Update User</h4>
              <EditUser edit={edit} setEdit={setEdit} currentUser={currentUser} updateUser={updateUser}/>
            </div>
          ) : (
            <div>
              <h4>Add User</h4>
              <AddUser addUser={addUser} />
            </div>
          )}
        <hr/>
        </div>
        <div className="flex-large">
          <h4>View User</h4>
            <UserList users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>  
      </div>
    </div>
  );
}

export default Home
