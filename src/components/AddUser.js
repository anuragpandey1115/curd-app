import axios from 'axios';
import React,{useState} from 'react';
import { useHistory } from "react-router-dom";


const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        firsr_name: "",
        last_name: "",
        email: ""

    });
    const {first_name, last_name, email}= user;

    const onInputChange = e => {
        setUser({...user,[e.target.name]: e.target.value})
    };
    const onSubmit = async  e => {
        e.preventDefault();
        await axios.post("http://localhost:3002/users",user);
        history.push("/");
    };
    return (
        <>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Add A User</h2>
                    <form  
                    onSubmit={e => onSubmit(e)}
                    >
                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Frst Name..."
                                name="first_name"
                                value={first_name} required
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input

                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Your Lastname..."
                                name="last_name"
                                value={last_name}
                                onChange={e => onInputChange(e)}
                                required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="Email"
                                className="form-control form-control-lg"
                                placeholder="Enter Your E-mail Address..."
                                name="email"
                                value={email} required
                                onChange={e => onInputChange(e)}
                            />
                        </div>
                        <button className="btn btn-outline-dark btn-block">Add User</button>
                        </form>
      </div>
    </div>
            </>
    );
}
export default AddUser;