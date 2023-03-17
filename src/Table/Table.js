import React from 'react';

const Table = () => {
    return (
        <div>
            <button className="btn mb-3 mr-3 btn-active btn-primary">Add Employee</button>
            <button className="btn btn-outline">LogOut</button>
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
                    {/* <tbody>
                        {products?.length &&
                            products?.map((product, i) => <tr>
                                <th>{i + 1}</th>


                                <td>{product.name}</td>
                                <td> ${product.price}</td>
                                <td>{product.postedtime}</td>
                                <td> {
                                    product?.soldStatus ? <> <p>sold</p>
                                    </> :
                                        <>
                                            <p>unsold</p>
                                        </>

                                } </td>
                                <td>
                                    <button onClick={() => handlDeleteProducts(product._id)} className='btn btn-sm'>Delete</button>
                                </td>
                                <td>
                                    {
                                        product?.advertise && !product?.soldStatus ? <>
                                            <button onClick={() => handleAdvertiseProduct(product._id)} className='btn btn-primary btn-sm'>add advirtised</button>
                                        </> :

                                            <>
                                                <button onClick={() => handleAdvertiseProduct(product._id)}

                                                    className='btn btn-primary 
                                            
                                            btn-sm'>add advirtised</button>
                                            </>



                                    }


                                </td>

                            </tr>)
                        }
                    </tbody> */}
                </table>
            </div>
        </div>
    );
};

export default Table;