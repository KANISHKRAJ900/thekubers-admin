import React, { useState, useEffect } from "react";
import { getRequest } from "../Constant/apiCall";
import GlobalContext from "./GlobalContext";

function GlobalState(props) {
  const [toggle, setToggle] = useState(false);
  const [userName, setUserName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [profileDetails, setProfileDetails] = useState([]);
  const [network, setNetwork] = useState([]);
  const [toggleSelect, setToggleSelect] = useState("approved");
  const [startup, setStartup] = React.useState([]);
  const [startupToggle, setStartupToggle] = useState("approved");
  const [Mentor, setMentor] = useState([]);
  const [mentorToggle, setMentorToggle] = useState("approved");
  const [networkSkeleton, setNetworkSkeleton] = useState(true);
  const [investor, setInvestor] = useState([]);
  const [investorToggle, setInvestorToggle] = useState("verified");

  const getInvestor = async () => {
    try {
      var res = await getRequest(
        "/dashboard/investors/" + investorToggle,
        true
      );
      console.log("res", res);
      var responseData = await res.json();
      console.log("responseData", responseData);
      console.log("investor", responseData);
      setInvestor(responseData);
      setNetworkSkeleton(false);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllStartupData = async () => {
    try {
      var res = await getRequest("/dashboard/startups/" + startupToggle, true);
      //   console.log("res", res);
      var responseData = await res.json();
      //   console.log("responseData", responseData);
      console.log("startup", responseData);
      setStartup(responseData);
      setNetworkSkeleton(false);
    } catch (e) {
      console.log(e);
    }
  };
  const getAllNetworkData = async () => {
    try {
      var res = await getRequest("/dashboard/networks/" + toggleSelect, true);
      console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("network", responseData);
      setNetwork(responseData);
      setNetworkSkeleton(false);
    } catch (e) {
      console.log(e);
    }
  };
  const getAllMentorData = async () => {
    try {
      var res = await getRequest("/dashboard/mentors/" + mentorToggle, true);
      console.log("res", res);
      var responseData = await res.json();
      // console.log("responseData", responseData);
      console.log("network", responseData);
      setMentor(responseData);
      setNetworkSkeleton(false);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  const getProfileData = async (id) => {
    try {
      var res = await getRequest("/auth/profile/update/" + id, true);
      var responseData = await res.json();
      // console.log("profile", responseData);
      setProfileDetails(responseData);
      setProfilePic(responseData.profile_pic);
      //   setProfile(responseData)
    } catch (err) {
      // console.log("err", err);
    }
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          toggle: toggle,
          setToggle: setToggle,
          toggleSidebar: toggleSidebar,
          setUserName: setUserName,
          getProfileData: getProfileData,
          network: network,
          getAllNetworkData: getAllNetworkData,
          getAllMentorData: getAllMentorData,
          setToggleSelect: setToggleSelect,
          toggleSelect: toggleSelect,
          getAllStartupData: getAllStartupData,
          startup: startup,
          startupToggle: startupToggle,
          setStartupToggle: setStartupToggle,
          Mentor: Mentor,
          mentorToggle: mentorToggle,
          setMentorToggle: setMentorToggle,
          networkSkeleton: networkSkeleton,
          setNetworkSkeleton: setNetworkSkeleton,
          setNetworkSkeleton: setNetworkSkeleton,
          getInvestor: getInvestor,
          investor: investor,
          investorToggle: investorToggle,
          setInvestorToggle: setInvestorToggle,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    </>
  );
}

export default GlobalState;
