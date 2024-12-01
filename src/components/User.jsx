import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers);
    const handleUserDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // delete from the database 
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingUsers = users.filter(user => user._id !== id)
                            setUsers(remainingUsers)
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto">
            <h2>Users: {users.length}</h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Creation Time</th>
                        <th>Last Login Time</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user._id}>
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>{user.lastSignInTime}</td>
                            <td>
                                <button className='btn'>E</button>
                                <button onClick={() => handleUserDelete(user._id)} className='btn'>X</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;