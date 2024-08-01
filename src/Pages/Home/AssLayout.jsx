import { Link } from "react-router-dom";


const AssLayout = ({ data }) => {

    console.log(data)
    const { date, description, img, level, mark, name, _id } = data;

    // console.log(date, description, img, level, mark, name, _id)

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
                    
                  <Link to={`/AssignmentDetails/${_id}`}> <button className="badge badge-outline">View Assignment</button></Link> 
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>


    );
};

export default AssLayout;