import React, { useState } from 'react';
import "./adduser.css"

const AddUser = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            website: formData.website,
        }
        onAdd(newUser);

        setFormData({
            name: '',
            email: '',
            phone: '',
            website: ''
        });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
            <input type="text" name="website" placeholder="Website" value={formData.website} onChange={handleInputChange} />
            <button className="btn" type="submit">Add</button>
            <hr />
        </form>
    )
}

export default AddUser;
