import React, { useState } from 'react';

const AddUser = (props) => {

  const initialState = {id: null, name: "", userName: ""}

  const [ user, setUser ] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user.name || !user.userName)return 
      props.addUser(user)
      setUser(initialState)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" placeholder="Enter name" value={user.name} onChange={handleChange}/>

        <label>Username:</label>
        <input name="userName" placeholder="Enter Username" value={user.userName} onChange={handleChange}/>
        <br></br>

        <button className="btn btn-primary">Save new user</button>

        <h6>Output: {user.name} || {user.userName} </h6>
      </form>
    </div>
  )
}

export default AddUser
