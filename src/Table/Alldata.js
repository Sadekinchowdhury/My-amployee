import React from 'react';
import TableForm from '../Tableform/TableForm';

const Alldata = ({ employe, i, refetch }) => {

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

    const editData = () => {


        fetch(`http://localhost:5000/alldata/edit/${employe?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {


                }

            })
    }
    return (

        <tbody>
            <tr>
                <th>{i + 1}</th>


                <td>{employe.firstName}</td>
                <td> {employe.lastName}</td>
                <td>{employe.Email}</td>
                <td> {employe.salary}
                </td>
                <td>{employe.date}</td>

                <td className='flex'>

                    <div>
                        <TableForm
                            employe={employe}
                            key={employe._id}

                        ></TableForm>
                    </div>
                    <div>
                        <button onClick={Deleteemploye} className="btn btn-outline btn-primary">Delete</button>
                    </div>

                </td>

            </tr>

        </tbody>

    );
};

export default Alldata;