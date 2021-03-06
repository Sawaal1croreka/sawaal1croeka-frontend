import axios from "axios";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../public/LOGO.jpg";

export default function Register() {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [e_mail, setE_mail] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [retireAge, setRetireAge] = useState();
  const [currentExpense, setCurrentExpense] = useState();
  const [inflation, setInflation] = useState();
  const [news_letter, setNews] = useState(false);
  const [terms, setTerms] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setDob(queryParams.get("dob"));
    setRetireAge(queryParams.get("retireAge"));
    setCurrentExpense(queryParams.get("currentExpense"));
    setInflation(queryParams.get("inflation"));
  });

  const register = () => {
    if (
      name !== undefined &&
      mobile !== undefined &&
      e_mail !== undefined &&
      gender !== undefined &&
      terms === true
    ) {
      const response = axios
        .post("https://sawaal1croreka.store//api/user", {
          name: name,
          mobile: mobile,
          e_mail: e_mail,
          gender: gender,
          dob: dob,
          retireAge: retireAge,
          currentExpense: currentExpense,
          inflation: inflation,
          news_letter: news_letter,
        })
        .then((res) => {
          if (res.data !== "Email Already Exists!!!") {
            location.href = "https://sawaal1croreka.com/rsc/passive?id=" + res.data.id;
          } else {
            console.log("Email Already Exists!!!");
          }
        });
    } else {
      alert("Enter Data!!!");
    }
  };

  return (
    <div
      className="row d-flex justify-content-center align-items-center h-100"
      style={{ overflowX: "hidden", margin: "0", padding: "0" }}
    >
      <div className="col">
        <div className="card card-registration ">
          <div className="row">
            <div
              className="col-xl-6"
              style={{
                paddingLeft: "0",
                height: " max-content",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <h5 className=" text-lowercase" style={{ padding: "0px" }}>
                <Image src={logo} height="150px" width="150px" />
              </h5>
              <div style={{ marginLeft: "40px" }}>
                <h3>Create account</h3>
                <p>Get access to exclusive features by creating an account</p>
              </div>
              <div className="card-body p-md-5 text-black">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <label
                        style={{ fontWeight: "bold", color: "white" }}
                        className="form-label"
                      >
                        Name
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <label
                        style={{ fontWeight: "bold", color: "white" }}
                        className="form-label"
                      >
                        E-mail
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <input
                        type="email"
                        id="form3Example1n1"
                        className="form-control form-control-lg"
                        onChange={(e) => setE_mail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <label
                        style={{ fontWeight: "bold", color: "white" }}
                        className="form-label"
                      >
                        Mobile
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <input
                        type="tel"
                        id="form3Example1n1"
                        className="form-control form-control-lg"
                        onChange={(e) => setMobile(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <label
                        style={{ fontWeight: "bold", color: "white" }}
                        className="form-label"
                      >
                        Gender
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-outline">
                      <div className="form-outline">
                        <select
                          type="text"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="Select">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <hr style={{ color: "#ffd700" }} />
                <div>
                  <div>
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      value="true"
                      style={{ marginRight: "20px" }}
                      onChange={() => setTerms(true)}
                    />
                    <label style={{ fontSize: "14px", color: "white" }}>
                      I have read and accept the{" "}
                      <label
                        style={{
                          color: "#ffd700",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        Terms and Conditions{" "}
                      </label>
                    </label>
                  </div>
                  <div className="check-box">
                    <input
                      type="checkbox"
                      id="news"
                      name="news"
                      value="true"
                      on
                      style={{ marginRight: "20px" }}
                      onChange={() => setNews(true)}
                    />
                    <label style={{ fontSize: "14px", color: "white" }}>
                      Subscribe to the newsletter to stay up to date
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg ms-2"
                    style={{
                      backgroundColor: "#ffd700",
                      color: "black",
                      fontWeight: "bold",
                      marginTop: "-2.5px",
                    }}
                    onClick={() => {
                      register();
                    }}
                  >
                    Next
                  </button>
                </div>
                <div>
                  <label style={{ marginTop: "-1.3px", color: "white" }}>
                    ???By Clicking Next you are giving us approval to contact you
                    via Email and/or Call and SMS for promotional as well as
                    transactional activity with us???
                  </label>
                </div>
                <div style={{ marginTop: "-1.3px", textAlign: "center" }}>
                  <label style={{ color: "white" }}>
                    Already have an account?{" "}
                    <label style={{ color: "#ffd700", fontWeight: "bold" }}>
                      {" "}
                      Sign in
                    </label>
                  </label>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 d-none d-xl-block"
              style={{ backgroundColor: "#ffd700" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
