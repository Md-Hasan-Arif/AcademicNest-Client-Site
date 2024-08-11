// import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import { AuthContext } from "../../Providers/AuthProviders";


const AssLayout = ({ data, allAssignment, setAssignment }) => {

    console.log(data)
    
    const { date, description, img, level, mark, name, _id } = data;

    // console.log(date, description, img, level, mark, name, _id)
    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/allassignment/${_id}`, {
                    
                    method: 'Delete'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if( data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          })
                          const remaining = allAssignment.filter(assignment => assignment._id !== _id)
                          setAssignment(remaining);
                    }
                })
              
            }
          });
    }
    return (


        <div className="card bg-base-100  shadow-xl ">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes" />
            </figure>
            <div className="">
                <h2 className="card-title">
                  {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
              
                <p>Date : {date}</p>
                <p>Level : {level}</p>
                <p>Mark: {mark}</p>
                <div className="card-actions justify-end">
                    
                {/* view Assignment Button*/}
                  <Link to={`/AssignmentDetails/${_id}`}> <button className="badge badge-outline">View Assignment</button></Link> 
                
                 {/* Delete Button */}
                  <button onClick={() => handleDelete(_id)} className="badge badge-outline">Delete</button>
                </div>

            </div>
        </div>


    );
};

export default AssLayout;