

const CreateAssignment = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        {/* Input Field title */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="title" name="title" className="input input-bordered" required />
                        </div>
                        {/* Description field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/* thumbnail field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail</span>
                            </label>
                            <input type="text" placeholder="Img Url" name="img" className="input input-bordered" required />
                        </div>
                        {/* Difficulty level */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Level</span>
                            </label>
                            <input type="text" placeholder="level" name="level" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {/*assignment mark field  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Mark</span>
                            </label>
                            <input type="text" placeholder="Set Mark" name="mark" className="input input-bordered" required />
                        </div>
                        {/* Date */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" placeholder="date" name="date" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;