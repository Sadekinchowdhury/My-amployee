import React from 'react';

const Alldata = ({ employe, i }) => {

    const Deleteemploye = () => {
        // const response = window.confirm("Do you want to delete?");


        fetch(`http://localhost:5000/alldata/${employe?._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {

                }


            }

            )

    }
    return (

        <tbody>
            <tr>
                <th>{i + 1}</th>


                <td>{employe.firstName}</td>
                <td> {employe.lastName}</td>
                <td>{employe.email}</td>
                <td> {employe.salary}
                </td>
                <td>{employe.date}</td>

                <td>

                    <button className="btn btn-outline mr-2">Edit</button>
                    <button onClick={Deleteemploye} className="btn btn-outline btn-primary">Delete</button>

                </td>

            </tr>

        </tbody>

    );
};

export default Alldata;