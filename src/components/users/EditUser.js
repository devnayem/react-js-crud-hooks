import React, {useState, useEffect} from 'react';

const EditUser = (props) => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    }, [props]
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({...user, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateUser(user.id, user)
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name="name" placeholder="Enter name" value={user.name} onChange={handleChange}/>

      <label>Username:</label>
      <input name="userName" placeholder="Enter Username" value={user.userName} onChange={handleChange}/>
      <br></br>

      <button className="btn btn-primary">Update user</button>
      <button className="btn btn-danger" onClick={()=>props.setEdit(false)}>Cancel</button>

      <h6>Output: {user.name} || {user.userName} </h6>
    </form>
  </div>
  )
}

export default EditUser
