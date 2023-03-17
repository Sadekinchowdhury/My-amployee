import React from 'react';
import Alldata from './Alldata';

const TableData = ({ employee, refetch }) => {
    refetch()


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Date</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    {
                        employee.map((employe, i) =>
                            <Alldata
                                employe={employe}
                                key={employe._id}
                                refetch={refetch}
                                i={i}

                            >

                            </Alldata>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default TableData;