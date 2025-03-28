import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffee }) => {
  const { name, available, supplier, taste, details, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(cof => cof._id !== _id )
              setCoffee(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side border shadow-sm p-2">
      <figure>
        <img className="w-[200px] mr-5" src={photo} alt="Coffee" />
      </figure>
      <div className="w-full flex justify-between items-center">
        <div className="">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <p>{available}</p>
          <p>{taste}</p>
          <p>{supplier}</p>
        </div>
        <div className="card-actions">
          <div className="join join-vertical space-y-2">
            <button className="btn join-item">Details</button>
            <Link to={`coffeeUpdate/${coffee._id}`} className="btn">
              <button className="join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(coffee._id)}
              className="btn join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
