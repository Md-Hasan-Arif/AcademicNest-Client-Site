import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssignment = () => {
    const LoadedAssignment = useLoaderData();
    const { date, description, img, level, mark, name, _id } = LoadedAssignment;

    const UpdateHandler = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.assignmentName.value;
        const img = form.img.value;
        const level = form.level.value;
        const mark = form.mark.value;
        const date = form.date.value;
        const description = form.description.value;

        const UpdateAssignment = { name, img, level, mark, date, description };
        console.log(UpdateAssignment)

        fetch(`http://localhost:5000/allAssignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateAssignment)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount> 0) {
                   Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'cool'
                   })
                  
                }
            })


    }
  

    return (
        <div className="bg-slate-600">
            <h2 className="text-center text-blue-300 font-bold">Update Assaignment </h2>
            <form onSubmit={UpdateHandler} >
                <div className=" mx-auto pt-5 pb-10 mt-5 bg-teal-300 grid md:grid-cols-2">
                    {/* Input Field title */}
                    <div className="form-control w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Assaignment Name</span>
                        </label>
                        <input type="text"  placeholder="Name of Asssaignment " name="assignmentName" defaultValue={name} className="input input-bordered" required />
                    </div>

                    {/* thumbnail field */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Thumbnail</span>
                        </label>
                        <input type="text" placeholder="Img Url" name="img" 
                        defaultValue={img} className="input input-bordered" required />
                    </div>

                    {/* Difficulty level */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Level</span>
                        </label>
                        <input type="text" placeholder="level" name="level"  defaultValue={level} className="input input-bordered" required />
                    </div>

                    {/*assignment mark field  */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Assignment Mark</span>
                        </label>
                        <input type="text" placeholder="Set Mark" name="mark" defaultValue={mark} className="input input-bordered" required />
                    </div>

                    {/* Date */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Date</span>
                        </label>
                        <input type="date" placeholder="date" name="date" defaultValue={date} className="input input-bordered" required />
                    </div>

                    {/* Description field */}
                    <div className="form-control  w-1/2 mx-auto">
                        <label className="label">
                            <span className="label-text text-black font-semibold">Description</span>
                        </label>
                        <textarea className="text-center" placeholder="explain the task" name="description"defaultValue={description} id="1" cols="10" rows="6"></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Update" className="btn w-1/2 mx-auto mb-5 " />
                </div>

            </form>
        </div>

    );
};

export default UpdateAssignment;