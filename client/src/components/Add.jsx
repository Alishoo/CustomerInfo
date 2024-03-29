import React, { useEffect, useState } from "react";
import axios from 'axios';
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid= (phoneNumber) => {
      if (! phoneNumber.match(/^((\+?971)|0)?5[024568]\d{7}$/)) {
        return 'Invalid value: '+phoneNumber;
      } else if (! phoneNumber.match(/^((\+?971)|0)?5[024568]\d{7}$/)) {
        return false;
      } else {
        return true;
      }
    }

    const customer = {
      phoneNumber,
      name,
      address,
      religion,
      gender,
    };

    try {
      const response = await axios.post('http://localhost:8800/customer', customer);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    setPhoneNumber("");
    setName("");
    setAddress("");
    setReligion("");
    setGender("");
  }

  return (
    <div className="form-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number   رقم الهاتف
          </label>
          <PhoneInput
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
              onChange={(e) => setAddress(e.value)}
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
