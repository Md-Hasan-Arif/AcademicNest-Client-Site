import { useLoaderData } from "react-router-dom";
import AssLayout from "./AssLayout";
import { useState } from "react";


const AllAssignment = () => {

    const LoadedAssignment = useLoaderData();
    const [allAssignment, setAssignment] = useState(LoadedAssignment);

    return (
        <div>
            <h2 className="text-center text-green-600">Loaded assignment are given here</h2>
            <div className="grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-4 ">
                
                
                {
                    LoadedAssignment.map(assignment => 
                    <AssLayout
                    key={assignment._id}
                    data = {assignment}
                    allAssignment = {allAssignment}
                    setAssignment ={setAssignment}
                    ></AssLayout>)
                }
            </div>
        </div>
    );
};

export default AllAssignment;