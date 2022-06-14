import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {};
  return (
    <>
      <div className="App">
        <header className="App-header">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <h3> Sign-up Form </h3>

            <label>Name:</label>
            <br />
            <input
              type="text"
              value={name}
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />

            <label>Mobile No. :</label>
            <br />
            <input
              type="text"
              value={mobile}
              required
              onChange={(e) => {
                handleMobileChange(e);
              }}
            />
            <br />

            <label>Email:</label>
            <br />
            <input
              type="email"
              value={email}
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            <br />

            <input type="submit" value="Submit" />
          </form>
        </header>
      </div>
      <div></div>
    </>
  );
}

export default Form;
