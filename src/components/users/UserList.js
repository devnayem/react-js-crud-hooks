import React from 'react'

  const UserList = (props) => (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td>
                <button className="btn btn-success" onClick={() => {props.editRow(user)} }>Edit</button>
                <button className="btn btn-danger" onClick={() => {props.deleteUser(user.id)} }>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Users Found</td>
          </tr>
        )
        }
      </tbody>
    </table>
  )

export default UserList
