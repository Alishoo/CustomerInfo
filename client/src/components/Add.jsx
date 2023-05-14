import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Add() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [religion, setReligion] = useState("");
  const [gender, setGender] = useState("");

  const addressOptions = [
    { value: "shariga", label: "Shariga" },
    { value: "dubai", label: "Dubai" },
    { value: "abudabi", label: "Adu dabi" },
    { value: "other", label: "Other" },
  ];

  const customer = {
    phoneNumber,
    name,
    address,
    religion,
    gender,
  };

  const handleSupmit = (e) => {};

  return (
    <div className="form-container">
      <form className="add-form" onSubmit={handleSupmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number   رقم الهاتف
          </label>
          <PhoneInput
            // className="form-control"
            country={"ae"}
            onlyCountries={["ae"]}
            id="phoneNumber"
            name="phoneNumber"
            onChange={(value) => setPhoneNumber(value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="customerName" className="form-label">
            Name   الأسم 
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your name"
            id="customerName"
            name="customerName"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address   العنوان 
          </label>
          <div>
            <Dropdown
              isSearchable
              placeHolder="Select..."
              options={addressOptions}
              onChange={(value) => setAddress(value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="religion" className="form-label">
            Religion   الدين
          </label>
          <div>
            <input
              type="radio"
              id="muslim"
              name="religion"
              value="muslim"
              checked={religion === "muslim"}
              onChange={(e) => setReligion(e.target.value)}
            />
            <label htmlFor="muslim">Muslim</label> {"  "}
            <input
              type="radio"
              id="other"
              name="religion"
              value="other"
              checked={religion === "other"}
              onChange={(e) => setReligion(e.target.value)}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender   الجنس
          </label>
          <div>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label> {"  "}
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit"> Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Add;
