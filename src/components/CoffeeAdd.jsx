import React from "react";
import Swal from "sweetalert2";

const CoffeeAdd = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const available = form.available.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      available,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Coffee Item added successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div className="md:px-16 mx-auto">
      <h1 className="text-4xl text-amber-700 text-center my-10">
        Add New Coffee Item here
      </h1>
      <form className="bg-yellow-200 p-10 space-y-5" onSubmit={handleAddCoffee}>
        {/* name and available row  */}
        <div className="flex flex-col md:flex-row gap-10">
          <fieldset className="md:w-1/2">
            <legend className="fieldset-legend">Coffee Name</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Coffee Name"
              name="name"
            />
          </fieldset>

          <fieldset className="md:w-1/2">
            <legend className="fieldset-legend">Available Quantity</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Available Quantity"
              name="available"
            />
          </fieldset>
        </div>

        {/* Supplier and Taste row  */}
        <div className="flex flex-col md:flex-row gap-10">
          <fieldset className="md:w-1/2">
            <legend className="fieldset-legend">Supplier</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Supplier"
              name="supplier"
            />
          </fieldset>

          <fieldset className="md:w-1/2">
            <legend className="fieldset-legend">Taste</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Taste"
              name="taste"
            />
          </fieldset>
        </div>
        {/* Category and Details row  */}
        <div className="flex flex-col md:flex-row gap-10">
          <fieldset className="md:w-1/2">
            <legend className="fieldset-legend">Category</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Category"
              name="category"
            />
          </fieldset>

          <fieldset className="md:w-1/2">
            <legend className="fieldset-legend">Details</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Details"
              name="details"
            />
          </fieldset>
        </div>
        {/* Picture row  */}
        <div className="flex flex-col md:flex-row gap-10">
          <fieldset className="w-full">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="URL"
              name="photo"
            />
          </fieldset>
        </div>
        {/* Submit button  */}
        <button
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-700"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default CoffeeAdd;
