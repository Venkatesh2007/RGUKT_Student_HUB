import "../student.css";
import React, { useContext, useState } from "react";
import HubContext from "../context/HubContext";

export default function Student() {
  const context = useContext(HubContext);
  const { sidewidth,user} = context;
  const [acad,setacad] = useState("none");
  const [host,sethost] = useState("none");
  const [per,setper] = useState("block");
  const academic=()=>{
      setacad("block");
      setper("none");
      sethost("none");
  };
  const personal=()=>{
      setacad("none");
      setper("block");
      sethost("none");
  }
  const hostel=()=>{
    setacad("none");
    setper("none");
    sethost("block");
  }


  return (
    <>
      
      <div
        className={`home2 ${
          (sidewidth.width == "73px" && "nav-margin") || "nav-margin2"
        }`}
      >
        <div className="head">
          <h1 id="heading1">STUDENT-HOME</h1>
          <div id="text">
            <a className="text" href="#">Default</a>
            <p>/</p>
            <a className="text" href="#">Student</a>
          </div>
        </div>
        <div className="body">
          <h1 id="heading2">STUDENT-DASHBORAD</h1>
          <div id="divs">
            <div id="todivs">
              <div id="profile">
                <div id="box">
                  <div id="photo">
                    <img src="#" alt="" />
                  </div>
                  <div id="name" className="bold">{user?user.name:"name"}</div>
                  <div id="Id">{user?user.id:"id"}</div>
                </div>
                <div className="branch">
                  <p className="bold">BRANCH</p>
                  <p>{user?user.branch:"Branch"}</p>
                </div>
                <div className="sem">
                  <p className="bold">SEM</p>
                  <p>{user?user.study:"Study"}</p>
                </div>
              </div>
              <div id="detalis">
                <div className="buttons">
                  <p className="but" onClick={personal} id="personal">Personal</p>
                  <p className="but" onClick={academic} id="Academic">Academic</p>
                  <p className="but" onClick={hostel} id="Hostel">Hostel</p>
                </div>
                <div className="padding" style={{display:`${per}`}} id="padding1">
                  <table id="table1" >
                    <tbody><tr id="row11">
                        <td id="studentid" className="tbold">Student ID</td>
                        <td id="stdid" className="name">{user?user.id:"id"}</td>
                      </tr>
                      <tr className="row11">
                        <td id="fullname" className="tbold"> Full Name</td>
                        <td className="name">{user?user.fullname:"Full name"}</td>
                      </tr>
                      <tr className="row11">
                        <td id="study" className="tbold">Study</td>
                        <td className="name">{user?user.study:"Study"}
                        </td>
                      </tr>
                      <tr className="row11">
                        <td id="department" className="tbold">Department</td>
                        <td className="name">{user?user.Branch:"Branch"}</td>
                      </tr>
                      <tr className="row11">
                        <td id="dob" className="tbold">Date Of Birth</td>
                        <td className="name">{user?user.dob:"DOB"}</td>
                      </tr>
                      <tr className="row11">
                        <td id="gender" className="tbold">Gender</td>
                        <td className="name">{user?user.gender:"Gender"}</td>
                      </tr>
                      <tr className="row11">
                        <td id="category" className="tbold">Category</td>
                        <td className="name">{user?user.category:"category"}</td>
                      </tr>
                      <tr className="row11">
                        <td id="bloodgroup" className="tbold">Blood Group</td>
                        <td className="name">--</td>
                      </tr>
                      <tr className="row11">
                        <td id="emali1" className="tbold">Email</td>
                        <td className="name">{user?user.email:"email"}</td>
                      </tr>
                      <tr id="row111">
                        <td id="mobile1" className="tbold">Mobile</td>
                        <td className="name">{user?(user.mobile?user.mobile:"xxxxxxxxxx"):"xxxxxxxxxx"}</td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="padding" style={{display:`${acad}`}} id="padding2">
                  <table id="table2">
                    <tbody><tr id="row11">
                        <td id="class" className="tbold">Classroom</td>
                        <td id="classid" className="name">AB1-XXX</td>
                      </tr>
                      <tr className="row11">
                        <td id="semester" className="tbold">Semester</td>
                        <td className="name">E1-S1</td>
                      </tr>
                      <tr id="row11">
                        <td id="branch" className="tbold">Branch</td>
                        <td className="name">Computer Science Engineering</td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="padding" style={{display:`${host}`}} id="padding3">
                  <table id="table3">
                    <tbody><tr id="row11">
                        <td id="hostelname" className="tbold">Hostel Name</td>
                        <td id="hostelid" className="name">GBH</td>
                      </tr>
                      <tr className="row11">
                        <td id="block" className="tbold">Block</td>
                        <td className="name">GBH_W</td>
                      </tr>
                      <tr id="row11">
                        <td id="roomnumber" className="tbold">Room Number</td>
                        <td className="name">XXX</td>
                      </tr>
                    </tbody></table>
                </div>
              </div>
            </div>
            <div id="about">
              <div id="title">About ME</div>
              <div id="item">
                <div id="email">
                  <div id="mail" className="bold">@Email</div>
                  <div id="stdmail">{user?user.email:"email"}</div>
                </div>
                <div id="phone">
                  <div id="mobile" className="bold">✆Mobile</div>
                  <div id="number">{user?(user.mobile?user.mobile:"xxxxxxxxxx"):"xxxxxxxxxx"}</div>
                </div>
                <div id="adress">
                  <div id="ad" className="bold">Address</div>
                  <p id="text">Basar
                    ___________
                    ___________
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

    </>

  );
  }