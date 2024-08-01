import { useLoaderData } from "react-router-dom";
import AssLayout from "./AssLayout";


const AllAssignment = () => {

    const allAssignment = useLoaderData();

    return (
        <div>
            <h2 className="text-center text-green-600">All assignment are given here</h2>
            <div className="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 ">
                
                
                {
                    
                    allAssignment.map(assignment => 
                    <AssLayout
                    key={assignment._id}
                    data = {assignment}
                    ></AssLayout>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;