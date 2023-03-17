import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useQuery } from 'react-query';
const TableForm = ({ employe }) => {


    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();



    const handleDetails = (data) => {
        const addemployee = {
            firstName: data.firstName,
            lastName: data.lastName,
            Email: data?.email,
            salary: data?.salary,
            date: data?.date
        };


        fetch(`http://localhost:5000/post/${employe?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addemployee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    };

    return (
        <div>
            <label
                htmlFor="my-modal-3"
                className="btn btn-outline mr-2 mb-5 hover:bg-sky-800 border-2 px-8 py-3 border-green-600 rounded-md"
            >
                Edit
            </label>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-gray-800">
                    <div className="card-body">
                        <div className="modal-action">
                            <label htmlFor="my-modal-3" className="font-bold text-white">
                                X
                            </label>
                        </div>

                        <form onSubmit={handleSubmit(handleDetails)}>
                            <p className="text-2xl font-semibold text-green-500 mb-4">
                                Edit your information
                            </p>

                            <div className="card-body">
                                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">FirstName</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("firstName", { required: true })}
                                            placeholder="FirstName"
                                            className="input input-bordered "
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">LastName</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("lastName", { required: true })}
                                            placeholder="LastName"
                                            className="input input-bordered "
                                        />
                                    </div>
                                </div>



                                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("email", { required: true })}
                                            placeholder="email"


                                            className="input input-bordered "
                                        />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Salary</span>
                                        </label>
                                        <input
                                            type="text"
                                            {...register("salary", { required: true })}
                                            placeholder="salary"
                                            className="input input-bordered "
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mb-3">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Date</span>
                                        </label>
                                        <input
                                            {...register("date", { required: true })}
                                            type="text"
                                            placeholder="date-month-year"
                                            className="p-3 rounded  "
                                        />
                                    </div>

                                </div>
                                <input className="btn btn-contact mt-5 w-full" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableForm;