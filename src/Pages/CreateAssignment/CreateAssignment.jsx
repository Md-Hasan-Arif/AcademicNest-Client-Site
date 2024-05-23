

const CreateAssignment = () => {
    return (

        <div className="bg-slate-600">
            <h2 className="text-center text-blue-300 font-bold">Create A Assaignment </h2>
            <form >
                <div className="grid md:grid-cols-2 mx-auto pt-5 pb-10 mt-5 bg-teal-300">
                    {/* Input Field title */}
                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Assaignment Name</span>
                        </label>
                        <input type="text" placeholder="Name of Asssaignment " name="assaignmentName" className="input input-bordered" required />
                    </div>

                    {/* thumbnail field */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Thumbnail</span>
                        </label>
                        <input type="text" placeholder="Img Url" name="img" className="input input-bordered" required />
                    </div>

                    {/* Difficulty level */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Level</span>
                        </label>
                        <input type="text" placeholder="level" name="level" className="input input-bordered" required />
                    </div>

                    {/*assignment mark field  */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Assignment Mark</span>
                        </label>
                        <input type="text" placeholder="Set Mark" name="mark" className="input input-bordered" required />
                    </div>

                    {/* Date */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Date</span>
                        </label>
                        <input type="date" placeholder="date" name="date" className="input input-bordered" required />
                    </div>

                    {/* Description field */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Description</span>
                        </label>
                        <textarea className="text-center" placeholder="explain the task" name="description" id="1" cols="10" rows="6"></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Create" className="btn w-1/2 mx-auto mb-5 " />
                </div>

            </form>
        </div>
        //     <div className="hero min-h-screen bg-base-200">
        //         <div className="hero-content">
        //             <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //                 <form className="card-body">



        //                     <div className="form-control mt-6">
        //                         <button className="btn btn-primary">Create</button>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
    );
};

export default CreateAssignment;