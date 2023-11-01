"use client";

import React, { useState } from "react";
import InputField from "./InputField";
import ImagePicker from "./ImagePicker";
import ButtonLoader from "../common/ButtonLoader";

const AddItemForm = ({ onAddItem, loading }) => {
  const [errors, setErrors] = useState({});
  const [payload, setPayload] = useState({
    name: "",
    price: "",
    // img: "",
  });

  const handleChange = (event) => {
    setPayload((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const validateInputs = (e) => {
    e.preventDefault();
    setErrors({});
    const inputs = { ...payload };
    let err = null;
    for (const [key, value] of Object.entries(inputs)) {
      if (!value) {
        err = { ...err, [key]: `${key.toUpperCase()} is required.` };
      }
    }

    setErrors(err);
    if (!err) {
      onAddItem(payload);
      setPayload({
        name: "",
        price: "",
      });
    }
  };

  return (
    <form onSubmit={validateInputs}>
      <InputField
        label="Item name"
        type="text"
        placeholder="Enter name"
        name="name"
        error={errors?.name}
        value={payload.name}
        onChange={handleChange}
        // required
      />
      <InputField
        label="Price"
        type="number"
        min={1}
        placeholder="Enter price"
        name="price"
        error={errors?.price}
        value={payload.price}
        onChange={handleChange}
        // required
      />
      <ImagePicker
        label="Image"
        error={errors?.img}
        file={payload.img}
        onChange={(file) =>
          setPayload((prev) => {
            return {
              ...prev,
              img: file,
            };
          })
        }
      />
      <button
        className="w-full h-[44px] bg-primary rounded-md text-white font-medium mt-16"
        type="submit"
      >
        {loading ? <ButtonLoader /> : "Add item"}
      </button>
    </form>
  );
};

export default AddItemForm;
