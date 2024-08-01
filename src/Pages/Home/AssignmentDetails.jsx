import { useLoaderData, useParams } from "react-router-dom";


const AssignmentDetails = () => {
    const All_Assignment = useLoaderData();
    console.log(All_Assignment)
    const assignmentId = useParams();
    console.log(assignmentId)
    const Find_specific_assignment = All_Assignment.find(Assignment => Assignment._id == assignmentId.id)
    console.log(Find_specific_assignment)

    const { date, description, img, level, mark, name, _id } = Find_specific_assignment;
    return (
        <div>
              <div className=" md:  bg-base-200">
                <img className="w-full max-h-80" src={img} alt="" />
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-1">Description :{description}</p>
                        <p className="py-1">Date :{date}</p>
                        <p className="py-1">Level :{level }</p>
                        <p className="py-1">Mark :{mark}</p>
                        
                    </div>
                </div>
                <div className="text-center space-x-4">
                    <button className="btn btn-outline btn-primary">Take Assignment</button>
                    <button className="btn btn-outline btn-primary">Update Assignment</button>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;