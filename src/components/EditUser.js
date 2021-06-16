import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  const { first_name, last_name, email } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/users/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
          <label>First_Name</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name..."
              name="first_name"
              value={first_name} required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Last_Name:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name..."
              name="last_name"
              value={last_name} required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>Email:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address..."
              name="email"
              value={email} required
              onChange={e => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
