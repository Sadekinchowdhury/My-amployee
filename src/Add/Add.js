import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';



const Add = () => {



    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const [add, setAdd] = useState("");

    const handlask = (data) => {
        const askDetails = {
            ask: data.msg,
            // user: user?.email,
            Name: data?.name,
            Email: data?.email,
        };

        // fetch("https://fitness-tracking-web-server.vercel.app/questions", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //     },
        //     body: JSON.stringify(askDetails),
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //     });
    };
    return (
        <div className='grid grid-cols-2'>
            <div className='bg-gradient-to-br m-3 ml-0 p-4 rounded-2xl'>
                <h2 className="card-title mb-2"> </h2>


                <div className="">


                    <div className="card-actions justify-end">
                    </div>


                </div>

            </div>

            <div>
                <div className="flex justify-center mt-8 pb-16">
                    <label
                        htmlFor="my-modal-6"
                        className="btn-explore-about  border-2 px-8 py-3 border-green-600 rounded-md"
                    >
                        Reply
                    </label>
                </div>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-gray-800">
                        <div className="card-body">
                            <div className="modal-action">
                                <label htmlFor="my-modal-6" className="font-bold text-white">
                                    X
                                </label>
                            </div>
                            <p className="text-4xl mb-5 text-all-green font-bold">
                                Reply
                            </p>
                            <form onSubmit={handleSubmit(handlask)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("name", { required: true })}
                                        placeholder="Name"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control mb-3">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register("email", { required: true })}
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control mb-3">
                                    <textarea
                                        {...register("msg", { required: true })}
                                        className="input h-36 text-white input-bordered"
                                        id=""
                                        cols="30"
                                        placeholder="Ask your questions"
                                        rows="10"
                                    ></textarea>
                                </div>
                                <div className="form-control mb-3">
                                    <button className="btn-explore-about border-2 px-8 py-3 border-green-600 rounded-md  ">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;