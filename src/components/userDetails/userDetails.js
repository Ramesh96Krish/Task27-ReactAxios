import{
    getUsers,
    addUser,
    UpdateUser,
    deleteUser
} from "../../services/index";
import AddUser from "../addUser/addUser";
import "./userDetails.css"
import { useState,useEffect } from 'react';

  
const UserDetails = () => {

useEffect (()=>{
    handleData();
},[]);
    
const [users, setUsers] = useState([])

const handleData = async () => {
    const response = await getUsers();
    setUsers(response.data);
}

const onAdd = (newUser) => {
    addUser(newUser)
    .then(
      (data) =>{
        setUsers(users => [...users, data.data])
      }
    ).catch(
    (error)=>{
      console.log("Error",error)
    }
    )
}



const handleEdit = async(id) =>{

    const existingUser = {
        name : "john",
        email : "john@mail.com",
        phone : "987654321",
        website : "john@org"
    }
    await UpdateUser(id,existingUser);
    alert(`id - ${id} has been updated`)
}

const handleDelete = async (id) =>{

    await deleteUser(id);
    let remove = users.filter(user => user.id !== id)
    alert(`the user id-${id}  has been deleted`);
    setUsers(remove);
}

    return(
        <div className="userDetails-container">
            <AddUser onAdd={onAdd} />
            <table className="odd-even-table">
                <thead>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                    <th> Website </th>
                    <th> Edit </th>
                    <th> Delete </th>
                </thead>
            {
                users.map((user) => (
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td><button className="edit-btn" onClick={()=>handleEdit(user.id)}>Edit</button></td>
                            <td><button className="delete-btn" onClick={()=>handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    </tbody>
                ))
            }
             </table>
        </div>
    )
}

export default UserDetails;